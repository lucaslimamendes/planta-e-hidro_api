import { Router } from 'express';

import authorization from './middlewares/authorization';
import authorizationAdmin from './middlewares/authorizationAdmin';
import { loginFind } from './app/controllers/LoginController';
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

export default routes;
