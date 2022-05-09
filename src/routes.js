import { Router } from 'express';

import authorization from './middlewares/authorization';
import { listUserV1, findUserV1, createUserV1, updateUserV1, removeUserV1, listUserV2, findUserV2 } from './app/controllers/UserController';
import { greenhouseList, greenhouseFind, greenhouseCreate, greenhouseUpdate, greenhouseRemove } from './app/controllers/GreenhouseController';
import { stockList, stockFind, stockCreate, stockUpdate, stockDelete } from './app/controllers/StockController';
import { loginFind } from './app/controllers/LoginController';

const routes = new Router();

routes.get('/v1/users', authorization, listUserV1);
routes.get('/v1/users/:id', authorization, findUserV1);
routes.post('/v1/users', createUserV1);
routes.patch('/v1/users/:id', authorization, updateUserV1);
routes.delete('/v1/users/:id', authorization, removeUserV1);
routes.get('/v2/users', authorization, listUserV2);
routes.get('/v2/users/:id', authorization, findUserV2);

routes.get('/greenhouses', greenhouseList);
routes.get('/greenhouses/:id', greenhouseFind);
routes.post('/greenhouses', greenhouseCreate);
routes.patch('/greenhouses/:id', greenhouseUpdate);
routes.delete('/greenhouses/:id', greenhouseRemove);

routes.get('/stock', stockList);
routes.get('/stock/:id', stockFind);
routes.post('/stock', stockCreate);
routes.patch('/stock/:id', stockUpdate);
routes.delete('/stock/:id', stockDelete);

routes.get('/login', loginFind);

export default routes;
