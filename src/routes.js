import { Router } from "express";

import { list, find, create, update, remove } from './app/controllers/UserController';

const routes = new Router();

routes.get('/users', list);
routes.get('/users/:id', find);
routes.post('/users', create);
routes.patch('/users/:id', update);
routes.delete('/users/:id', remove);

export default routes;
