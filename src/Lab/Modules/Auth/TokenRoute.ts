// Lab/Modules/Auth/TokenRoute.ts
import { Route } from '../../Library/Fastify';

/**
 * Example route so that the findModuleFiles type isn't messed up
 */
export default class LoginPageRoute extends Route<
  { grant_type: string },
  { grant_type: string }
> {
  public options: Route['options'] = {
    method: 'POST',
    url: '/token',
  };

  public handler: Route<
    { grant_type: string },
    { grant_type: string }
  >['handler'] = async (request, reply) => {
    console.log('token');

    const grantType = request.query.grant_type
      ? request.query.grant_type
      : request.body.grant_type;

    const secondsInDay = 86400; // 60 * 60 * 24
    const HTTP_STATUS_OK = 200;

    let obj;
    if (grantType === 'authorization_code') {
      obj = {
        token_type: 'bearer',
        access_token: '123access',
        refresh_token: '123refresh',
        expires_in: secondsInDay,
      };
    } else if (grantType === 'refresh_token') {
      obj = {
        token_type: 'bearer',
        access_token: '123access',
        expires_in: secondsInDay,
      };
    }

    reply.status(200).type('application/json').send(obj);
  };
}
