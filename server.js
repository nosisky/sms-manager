import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import validator from 'express-validator';

import MessageRouter from './server/routes/MessageRoutes';
import UserRouter from './server/routes/UserRoutes';


const server = express();

dotenv.load();

server.use(logger('dev'));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(validator());
server.use('/api/v1', MessageRouter);
server.use('/api/v1', UserRouter);

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`Connected on port: ${port}`);
});

export default server;
