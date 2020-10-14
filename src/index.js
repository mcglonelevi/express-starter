import express from 'express';
import config from './config.js';
import routes from './routes.js';
import init from './init.js';

const app = express();

// Set up routes
routes(app, config);

// Set up listening and initialization
init(app, config);
