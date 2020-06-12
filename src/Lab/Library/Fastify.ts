// Lab/Library/Fastify.ts
import fastify, {
  FastifyInstance,
  RequestHandler,
  RouteOptions,
  DefaultBody,
  DefaultHeaders,
  DefaultParams,
  DefaultQuery,
} from 'fastify';
import fastifyFormBody from 'fastify-formbody';
import { findModuleFiles } from '../Utils/moduleFileFinder';
import { IncomingMessage, ServerResponse } from 'http';

/**
 * Fastify Route
 */
export abstract class Route<
  Body = DefaultBody,
  Query = DefaultQuery,
  HttpRequest = IncomingMessage,
  HttpResponse = ServerResponse,
  Params = DefaultParams,
  Headers = DefaultHeaders
> {
  /**
   * Fastify Route Options
   * https://www.fastify.io/docs/latest/Routes/#routes-option
   */
  public options: Omit<RouteOptions, 'handler' | 'preHandler'>;

  /**
   * Fastify Route Handler
   */
  abstract handler: RequestHandler<
    HttpRequest,
    HttpResponse,
    Query,
    Params,
    Headers,
    Body
  >;
}

/**
 * Example route so that the findModuleFiles type isn't messed up
 */
export class ExampleRoute extends Route {
  public handler: Route['handler'] = async (request, reply) => {
    console.log('HelloWorld');

    return 'example';
  };
}

interface RouteModule {
  default: typeof ExampleRoute;
}

export async function getRoutes(): Promise<Route[]> {
  /**
   * Get all Modules under `Modules` that match `*Route.ts`
   */
  const routeModules = await findModuleFiles<RouteModule>(/.*Route\.ts/);

  // Destructure the default export from all matching route Modules, and construct the class
  return routeModules.flatMap(({ default: RouteClass }) => new RouteClass());
}

/**
 * Create a Fastify Web Server
 */
export async function createFastifyServer(): Promise<FastifyInstance> {
  const webServer = fastify();

  webServer.register(fastifyFormBody);

  /**
   * Get All Route Modules.
   */
  const routes = await getRoutes();

  /**
   * For each Route Module in routes destructure handler and options and register as a webServer Route.
   */
  routes.map(({ handler, options }) => {
    return webServer.route({
      ...options,
      handler,
    });
  });

  return webServer;
}

/**
 * Creates a fastify Testing Chain https://www.fastify.io/docs/latest/Testing/
 */
export async function createFastifyTestServer() {
  const webServer = await createFastifyServer();

  return webServer;
}
