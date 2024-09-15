const productos = require('../models/productos');

// funcion agregar cliente
exports.agregarproducto = async (req, res) => {
    try {
        
        let producto;
        producto = new productos(req.body)
        await producto.save();
        res.json(producto);

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al agregar producto')
        
    }
}
//buscar cliente
exports.buscarproducto= async(req, res)=>{
    try {
        const producto = await productos.find()
        res.json(producto);

    } catch (error) {
        console.log(error)
        res.status(500).send('No se encontro el producto')
    }
}
//buscar un producto
exports.buscarunproducto = async(req, res)=>{
    try {
        let producto = await productos.findById(req.params.id);
        if(!producto){
            res.status(404).send({msg:"No se encuentra el producto por id"});
        }else{
            res.json(producto);
        }

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al buscar un producto');
    }
}
//actualizar producto con metodo put
exports.actualizarproducto = async (req, res) =>{
    try {
        const producto = await productos.findOneAndUpdate(
            { _id: req.params.id}, req.body);
            
        if(!producto){
            res.status(404).send({msg:"Cliente no actualizado"});
        }else{
            res.json(producto);
        }
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error actualizar un producto');
    }
}
// eliminar productos
exports.eliminarproducto = async (req, res) =>{
    try {
        const producto = await productos.findById({_id: req.params.id});
        if(!producto){
            res.status(404).send("El producto no existe")
        }
        await productos.findOneAndDelete({_id: req.params.id})
        res.json({msg: "El producto ha sido eliminado"});
        return
    } catch (error) {
        console.log(error)
        res.status(500).send('No se elimino producto');
    }
}