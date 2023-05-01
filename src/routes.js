import { Router } from 'express';

import authorization from './middlewares/authorization';
import authorizationAdmin from './middlewares/authorizationAdmin';
import { loginFind } from './app/controllers/LoginController';
import { notifyCreate } from './app/controllers/NotifyController';
import {
  userList,
  userFind,
  userCreate,
  userUpdate,
  userRemove,
} from './app/controllers/UserController';
import {
  sensorList,
  sensorFind,
  sensorCreate,
  sensorRemove,
} from './app/controllers/SensorController';
import {
  alertList,
  alertFind,
  alertCreate,
  alertRemove,
} from './app/controllers/AlertController';

const routes = new Router();

routes.post('/login', loginFind);

routes.get('/v1/users', authorizationAdmin, userList);
routes.get('/v1/users/:id', authorization, userFind);
routes.post('/v1/users', userCreate);
routes.patch('/v1/users/:id', authorization, userUpdate);
routes.delete('/v1/users/:id', authorizationAdmin, userRemove);

routes.get('/v1/sensors/:userId', authorization, sensorList);
routes.get('/v1/sensors/:id', authorization, sensorFind);
routes.post('/v1/sensors', authorization, sensorCreate);
routes.delete('/v1/sensors/:id', authorization, sensorRemove);

routes.get('/v1/alerts', authorizationAdmin, alertList);
routes.get('/v1/alerts/:userId', authorization, alertFind);
routes.post('/v1/alerts', authorization, alertCreate);
routes.delete('/v1/alerts/:id', authorization, alertRemove);

routes.post('/v1/notify/:userId/:sensorId', notifyCreate);

export default routes;
