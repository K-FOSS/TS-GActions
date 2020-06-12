// src/Lab/index.ts
import { createFastifyServer } from './Library/Fastify';
import { SmartHomeController } from '../Modules/SmartHome';
import { CoreLight } from './Devices/CoreLight';
import { Jumper } from './Devices/Jumper';

if (process.env.NODE_ENV !== 'production') {
  const { config } = await import('dotenv');

  config();
}

const webServer = await createFastifyServer();

const smartHomeController = await SmartHomeController.createController({
  devices: [new CoreLight(), new Jumper()],
});

webServer.all('/fulfillment*', async (request, reply) => {
  const smartHomeReply = await smartHomeController.smartHome.handler(
    request.body,
    request.headers,
  );

  reply.status(smartHomeReply.status);

  if (smartHomeReply.headers) {
    reply.headers(smartHomeReply.headers);
  }

  return smartHomeReply.body;
});

await webServer.listen(3000, '0.0.0.0');
