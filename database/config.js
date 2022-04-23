const mongoose = require('mongoose'); //se importa mongoose para conectar con la db
require('dotenv').config();

//mongodb+srv://MasterProgramador:DYg7NQ8ZBg5LN2NY@cluster0.p9rmv.mongodb.net/test

const dbConnection = () => {

    mongoose.connect(process.env.DB);
    const db = mongoose.connection;
    db.on('unhandledRejection', (reason, promise) => {
        console.log('Entre al Rejection:', promise, 'reason:', reason);
        throw new Error('Error en la conexion de la DB');
    });
    db.once('open', function() {
        console.log("Conectado Exitosamente a la DB");
    });
}

module.exports = {
    dbConnection
}