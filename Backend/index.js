import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
//import riderRoutes from './routes/rider.js';

//app.use('/riders', riderRoutes);

const app = express();

app.use(bodyParser.json({limit: "20mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended:true}));

app.use(cors());


const CONNECTION_URL = 'mongodb+srv://fahadbajwa:jutt78l.mongodb.net/?retryWrites=t68@cluster0.b3i8o9rue&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true, useUnifiedTopology:true
}).then(() => app.listen(PORT, () =>
    console.log('Connection is established and running on port:  ${PORT} ')
)).catch((err) => console.log(err.message));

mongoose.connect(CONNECTION_URL).then(()=>{console.log('...')})
// mongoose.set('useFindAndModify',false)