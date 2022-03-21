import { Router } from "express";

import { list, find, create, update, remove } from './app/controllers/UserController';
import { list, find, create, update, remove } from './app/controllers/GreenhouseController';

const routes = new Router();

routes.get('/users', list);
routes.get('/users/:id', find);
routes.post('/users', create);
routes.patch('/users/:id', update);
routes.delete('/users/:id', remove);

routes.get('/Greenhouses', list);
routes.get('/Greenhouses/:id', find);
routes.post('/Greenhouses', create);
routes.patch('/Greenhouses/:id', update);
routes.delete('/Greenhouses/:id', remove);

export default routes;
