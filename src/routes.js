import { Router } from 'express';

import {
  list,
  find,
  create,
  update,
  remove,
} from './app/controllers/UserController';
import {
  greenhouseList,
  greenhouseFind,
  greenhouseCreate,
  greenhouseUpdate,
  greenhouseRemove,
} from './app/controllers/GreenhouseController';

const routes = new Router();

routes.get('/users', list);
routes.get('/users/:id', find);
routes.post('/users', create);
routes.patch('/users/:id', update);
routes.delete('/users/:id', remove);

routes.get('/greenhouses', greenhouseList);
routes.get('/greenhouses/:id', greenhouseFind);
routes.post('/greenhouses', greenhouseCreate);
routes.patch('/greenhouses/:id', greenhouseUpdate);
routes.delete('/greenhouses/:id', greenhouseRemove);

export default routes;
