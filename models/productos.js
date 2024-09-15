const mongoose = require('mongoose');

const productosSchema = mongoose.Schema({
    nombre:{
        type:String,
        require:true
    },
    catalogacion:{
        type:String,
        require:true
    },
    idproducto:{
        type:Number,
        require:true
    },
    referencia:{
        type:Number,
        require:true
    },
    valor:{
        type:Number,
        require:true
    },

},{versionkey:false});

module.exports = mongoose.model('productos', productosSchema);