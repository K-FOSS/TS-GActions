// src/Lab/index.ts
import { SmartHomeController } from '../Modules/SmartHome';
import { CoreLight } from './Devices/CoreLight';
import express from 'express';
import bodyParser from 'body-parser';
import { registerAuthEndpoints } from './Auth';

const webServer = express();
webServer.use(bodyParser.json());
webServer.use(bodyParser.urlencoded({ extended: true }));

const smartHomeController = await SmartHomeController.createController({
  devices: [new CoreLight()],
});

webServer.post('/fulfillment', smartHomeController.smartHome);

await registerAuthEndpoints(webServer);

await webServer.listen(3000);
