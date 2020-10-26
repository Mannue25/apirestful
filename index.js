
const express = require('express');
const mongoose = require('mongoose');
const routes= require('./routes')
const cors = require('cors')
const bodyParser = require('body-parser');


//Crear el server.
const app = express();

//Conectar a mongo.

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}) 
    

//middleware cors
const whiteList = ['http://localhost:3000'];
const corsOptions = {
    origin: (origin, cb) => {
        const existe = whiteList.some(dominio => dominio === origin);
        if(existe) {
            cb(null, true)
        } else {
            cb(new Error('No permitido por CORS'))
        }
    }
}
app.use(cors());

//Middleware  bodyParser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Middleware routing
app.use('/', routes())

app.listen(4000);