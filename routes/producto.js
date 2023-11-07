// Rutas para producto
const express = require('express'); 
const { models } = require('mongoose');
const router = express.Router(); 
const productoController = require('../controllers/productoController');

// api/productos
router.post('/', productoController.crearProducto);
router.get('/', productoController.obtenerProductos);
router.put('/:id', productoController.actualizarProducto);

module.exports = router; 