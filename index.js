const express = require('express')

const bodyparser=require('body-parser')
const cors = require('cors');

const app = express()
app.use(express.json());
const port = process.env.PORT || 3001

app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

/*app.use(cors({
  origin: '*',
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));*/

const user= 'grupoAAg57';
const password= 'viernes';
const db ='BaseAA';
const url=`mongodb+srv://${user}:${password}@cluster0.ibuw2.mongodb.net/${db}?retryWrites=true&w=majority`

const mongoose= require('mongoose');

mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true})
.then(db => console.log('base de datos conectada'))
.catch(err =>  console.error(err));

//habilitar cors
app.use(cors());
 
app.set("view engine","ejs" );
app.set("views", __dirname + "/views");

app.use('/',require('./rutas/tareas'));
app.use(express.static(__dirname + '/publica'))
 
app.listen(port, () => {
  console.log(`El puerto ${port} ha sido levantado`)
}) 