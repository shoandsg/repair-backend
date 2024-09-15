const express = require("express");
const conectarBD = require('../configdb/db');
const cors = require('cors');

const app = express();
const puerto = process.env.PORT || 5000;


// llamar nuestra funcion db

conectarBD();
app.use(cors());
app.use(express.json());

//rutas del proyecto

app.use('/api/producto', require('../routes/productorutas'));



//ruta desde la web

app.get('/', (req,res) =>{
    res.send("bienvenido estamos en el navegador");
} )


app.listen(puerto,() => console.log("estamos conectados desde el servidor", puerto));
