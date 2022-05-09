import { Router } from 'express';

import authorization from './middlewares/authorization';
import { list, find, create, update, remove } from './app/controllers/UserController';
import { greenhouseList, greenhouseFind, greenhouseCreate, greenhouseUpdate, greenhouseRemove } from './app/controllers/GreenhouseController';
import { stockList, stockFind, stockCreate, stockUpdate, stockDelete } from './app/controllers/StockController';
import { loginFind } from './app/controllers/LoginController';

const routes = new Router();

routes.get('/users', authorization, list);
routes.get('/users/:id', authorization, find);
routes.post('/users', create);
routes.patch('/users/:id', authorization, update);
routes.delete('/users/:id', authorization, remove);

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
