const mongoose = require ('mongoose');

require('dotenv').config();

//funsion conexion base de datos

const conectarBD= () =>{
    mongoose
    .connect(process.env.MONGO_DB)
    .then(() => console.log("estamos conectados a mongo db"))
    .catch((err) => console.log(err));
}
module.exports = conectarBD;