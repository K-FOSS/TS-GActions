// Lab/Modules/Auth/AuthRoute.ts
import { Route } from '../../Library/Fastify';

/**
 * Example route so that the findModuleFiles type isn't messed up
 */
export default class LoginPageRoute extends Route<
  any,
  { responseurl: string }
> {
  public options: Route['options'] = {
    method: 'GET',
    url: '/login',
    schema: {
      querystring: {
        type: 'object',
        required: ['responseurl'],
        properties: {
          name: { type: 'string' },
        },
      },
    },
  };

  public handler: Route<any, { responseurl: string }>['handler'] = async (
    request,
    reply,
  ) => {
    const responseUrl = request.query.responseurl;

    console.debug(`loginPage:`, request, reply);

    reply.type('text/html');

    return `<html>
        <body>
          <form action="/login" method="post">
            <input type="hidden" name="responseurl" value="${responseUrl}" />
            <button type="submit" style="font-size:14pt">Link this service to Google</button>
          </form>
        </body>
      </html>`;
  };
}
