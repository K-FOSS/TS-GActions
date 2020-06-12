// Lab/Modules/Auth/AuthRoute.ts
import { Route } from '../../Library/Fastify';

/**
 * Example route so that the findModuleFiles type isn't messed up
 */
export default class LoginRoute extends Route<{ responseurl: string }> {
  public options: Route['options'] = {
    method: 'POST',
    url: '/login',
    schema: {
      body: {
        type: 'object',
        required: ['responseurl'],
        properties: {
          responseurl: { type: 'string' },
        },
      },
    },
  };

  public handler: Route<{ responseurl: string }>['handler'] = async (
    request,
    reply,
  ) => {
    // Here, you should validate the user account.
    // In this sample, we do not do that.
    const responseurl = decodeURIComponent(request.body.responseurl);

    console.log(request, reply);

    reply.redirect(responseurl);
  };
}
