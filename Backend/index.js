import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({limit: "50mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "50mb", extended:true}));

app.use(cors());


const CONNECTION_URL = 'mongodb+srv://fahadbajwa:jutt7868@cluster0.b3i8o9l.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true, useUnifiedTopology:true
})