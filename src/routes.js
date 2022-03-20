import { Router } from "express";

import { list, get, update, remove, create } from './app/controllers/UserController';

const routes = new Router();

routes.get('/users', list);
routes.post('/users', create);
routes.get('/users/:id', get);
routes.put('/users/:id', update);
routes.delete('/users/:id', remove);

export default routes;
