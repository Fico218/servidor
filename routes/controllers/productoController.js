import Producto, { find, findById, findOneAndUpdate, findOneAndRemove } from "../../models/Producto";

export async function crearProducto(req, res) {
    
    try {
        let producto;

        // Creamos nuestro producto
        producto = new Producto(req.body); 

        await producto.save();
        res.send(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
export async function obtenerProductos(req, res) {

    try {

        const producto = await find(); 
        res.json(productos)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

export async function actualizarProducto(req, res) {

    try {
        const { nombre, categoria, ubicacion, precio } = req.body;
        let producto = await findById(req.params.id);

        if(!producto){
            res.status(404).json({ msg: 'No existe el producto'})
        }

        producto.nombre = nombre; 
        producto.categoria = categoria; 
        producto.ubicacion = ubicacion; 
        producto.precio = precio; 

        producto = await findOneAndUpdate({ _id: req.params-id }, producto, { new: true })
        res.json(producto);

    } catch (error) {
        console.log(error); 
        res.status(500).seng('Hubo un error');    
    }
}

export async function obtenerProducto(req, res) {

    try {
        let producto = await findById(req.params.id);

        if(!producto){
            res.status(404).json({ msg: 'No existe el producto'})
        }

        res.json(producto);

    } catch (error) {
        console.log(error); 
        res.status(500).seng('Hubo un error');    
    }
}

export async function eliminarProducto(req, res) {

    try {
        let producto = await findById(req.params.id);

        if(!producto){
            res.status(404).json({ msg: 'No existe el producto'})
        }

        await findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Producto eliminado con éxito' });

    } catch (error) {
        console.log(error); 
        res.status(500).send('Hubo un error');    
    }
}





