require('dotenv').config(); //Se importa el uso de los .env

const express = require('express'); //se importa express
const cors = require('cors');
const { dbConnection } = require('./database/config'); //se importa la cxn 


//Se crea el servidor Express

const app = express();


//Configuración del Cors

app.use(cors());

//se crea la bd

dbConnection();



//Rutas

app.get('/', (request, response) => {

    response.json({
        ok: true,
        message: 'Nuestra primera app'
    });

});


//levantar el servidor 

app.listen(process.env.PORT, () => {
    console.log('Servidor Corriendo');
}); //Primer parametro es el puerto, callback