/* eslint-disable camelcase */
import * as express from 'express';
import * as util from 'util';

/**
 * A function that adds /login, /fakeauth, /faketoken endpoints to an
 * Express server. Replace this with your own OAuth endpoints.
 *
 * @param expressApp Express app
 */
export async function registerAuthEndpoints(
  expressApp: express.Express,
): Promise<void> {
  expressApp.get<any, any, any, { responseurl: string }>(
    '/login',
    (req, res) => {
      res.send(`
      <html>
        <body>
          <form action="/login" method="post">
            <input type="hidden" name="responseurl" value="${req.query.responseurl}" />
            <button type="submit" style="font-size:14pt">Link this service to Google</button>
          </form>
        </body>
      </html>
    `);
    },
  );

  expressApp.post<
    any,
    any,
    {
      responseurl: string;
    }
  >('/login', async (req, res) => {
    // Here, you should validate the user account.
    // In this sample, we do not do that.
    const responseurl = decodeURIComponent(req.body.responseurl);
    console.log(`Redirect to ${responseurl}, ${JSON.stringify(req.body)}`);
    return res.redirect(responseurl);
  });

  expressApp.get<any, any, any, { redirect_uri: string; state: any }>(
    '/fakeauth',
    async (req, res) => {
      const responseurl = util.format(
        '%s?code=%s&state=%s',
        decodeURIComponent(req.query.redirect_uri),
        'xxxxxx',
        req.query.state,
      );
      console.log(`Set redirect as ${responseurl}`);
      return res.redirect(
        `/login?responseurl=${encodeURIComponent(responseurl)}`,
      );
    },
  );

  expressApp.all<any, any, { grant_type: string }, { grant_type: string }>(
    '/faketoken',
    async (req, res) => {
      const grantType = req.query.grant_type
        ? req.query.grant_type
        : req.body.grant_type;

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

      res.status(HTTP_STATUS_OK).json(obj);
    },
  );
}
