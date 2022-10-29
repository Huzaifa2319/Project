

import express from 'express';
import dotenv from 'dotenv';
import Connection  from './Database/db.js';
import Routes from './Routes/routes.js'
import cors from '.cors'

const app = express();

app.use('/', Routes);
dotenv.config();
app.use(cors());

const Port = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


Connection(username, password);

app.listen(Port, () => console.log(`Server is running successfully on port ${Port}`))
