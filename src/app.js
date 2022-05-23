import express from 'express';
import routes from './routes';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../swagger-output.json';
import './config/database';

const app = express();

app.use(express.json());

app.use(routes);

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

export default app;
