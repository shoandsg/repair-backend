const express = require('express');
const router = express.Router();
const productoscontrol = require('../controllers/productoscontrol');

// rutas crud

router.post('/', productoscontrol.agregarproducto);
router.get('/', productoscontrol.buscarproducto);
router.get('/:id', productoscontrol.buscarunproducto);
router.put('/:id', productoscontrol.actualizarproducto);
router.delete('/:id', productoscontrol.eliminarproducto);

module.exports = router;