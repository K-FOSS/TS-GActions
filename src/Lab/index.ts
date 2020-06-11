// src/Lab/index.ts
import { SmartHomeController } from '../Modules/SmartHome';
import { CoreLight } from './Devices/CoreLight';
import express from 'express';
import bodyParser from 'body-parser';
import { registerAuthEndpoints } from './Auth';
import { Jumper } from './Devices/Jumper';

if (process.env.NODE_ENV !== 'production') {
  const { config } = await import('dotenv');

  config();
}

const webServer = express();
webServer.use(bodyParser.json());
webServer.use(bodyParser.urlencoded({ extended: true }));

const smartHomeController = await SmartHomeController.createController({
  devices: [new CoreLight(), new Jumper()],
});

webServer.post('/fulfillment', smartHomeController.smartHome);

await registerAuthEndpoints(webServer);

webServer.listen(3000);
