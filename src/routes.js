import { Router } from 'express';

import authorization from './middlewares/authorization';
import authorizationAdmin from './middlewares/authorizationAdmin';
import { loginFind } from './app/controllers/LoginController';
import { listProfile, createProfile } from './app/controllers/ProfileController';
import { listUserV1, findUserV1, createUserV1, updateUserV1, removeUserV1, listUserV2, findUserV2, createUserV2 } from './app/controllers/UserController';
import { greenhouseList, greenhouseFind, greenhouseCreate, greenhouseUpdate, greenhouseRemove } from './app/controllers/GreenhouseController';
import { consultantList, consultantFind, consultantCreate, consultantUpdate, consultantRemove } from './app/controllers/ConsultantController';
import { productList, productFind, productCreate, productUpdate, productRemove } from './app/controllers/ProductController';
import { sensorList, sensorFind, sensorCreate, sensorUpdate, sensorRemove } from './app/controllers/SensorController';

const routes = new Router();

routes.post('/login', loginFind);

routes.get('/v1/users', authorizationAdmin, listUserV1);
routes.get('/v1/users/:id', authorization, findUserV1);
routes.post('/v1/users', createUserV1);
routes.patch('/v1/users/:id', authorization, updateUserV1);
routes.delete('/v1/users/:id', authorizationAdmin, removeUserV1);
routes.get('/v2/users', authorizationAdmin, listUserV2);
routes.get('/v2/users/:id', authorization, findUserV2);
routes.post('/v2/users', authorizationAdmin, createUserV2);

routes.get('/v1/profiles', authorizationAdmin, listProfile);
routes.post('/v1/profiles', authorizationAdmin, createProfile);

routes.get('/v1/greenhouses', authorization, greenhouseList);
routes.get('/v1/greenhouses/:id', authorization, greenhouseFind);
routes.post('/v1/greenhouses', authorization, greenhouseCreate);
routes.patch('/v1/greenhouses/:id', authorization, greenhouseUpdate);
routes.delete('/v1/greenhouses/:id', authorization, greenhouseRemove);

routes.get('/v1/consultants', authorization, consultantList);
routes.get('/v1/consultants/:id', authorization, consultantFind);
routes.post('/v1/consultants', authorizationAdmin, consultantCreate);
routes.patch('/v1/consultants/:id', authorization, consultantUpdate);
routes.delete('/v1/consultants/:id', authorizationAdmin, consultantRemove);

routes.get('/v1/products/:greenhouseId', authorization, productList);
routes.get('/v1/product/:id', authorization, productFind);
routes.post('/v1/products', authorization, productCreate);
routes.patch('/v1/products/:id', authorization, productUpdate);
routes.delete('/v1/products/:id', authorization, productRemove);

routes.get('/v1/sensors/:greenhouseId', authorization, sensorList);
routes.get('/v1/sensor/:id', authorization, sensorFind);
routes.post('/v1/sensors', authorization, sensorCreate);
routes.patch('/v1/sensors/:id', authorization, sensorUpdate);
routes.delete('/v1/sensors/:id', authorization, sensorRemove);

export default routes;
