// Lab/Modules/Auth/AuthRoute.ts
import { Route } from '../../Library/Fastify';
import * as util from 'util';

/**
 * Example route so that the findModuleFiles type isn't messed up
 */
export default class AuthRoute extends Route {
  public options: Route['options'] = {
    method: 'GET',
    url: '/auth',
  };

  public handler: Route['handler'] = async (request, reply) => {
    const responseurl = util.format(
      '%s?code=%s&state=%s',
      decodeURIComponent(request.query.redirect_uri),
      'xxxxxx',
      request.query.state,
    );
    console.log(`Set redirect as ${responseurl}`);
    return reply.redirect(
      `/login?responseurl=${encodeURIComponent(responseurl)}`,
    );
  };
}
