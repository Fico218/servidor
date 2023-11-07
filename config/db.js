
const mongoose=require("mongoose");

   mongoose.connect("mongodb://localhost:27017/meanproductos", {
     useNewUrlParser:true,
     useUnifiedTopology: true
   })
    .then(()=>{
      console.log("Conexión correcta");
    })
    .catch(err =>{
      console.log(err);
    })


/* const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' }); 

const conectarDB = async () => {

    try {

    await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            // useFindAndModify: false


        })
        console.log('BD Conectada');  
    } 
    
    catch (error) {
        console.log(error); 
        process.exit(1); // Detenemos la app   
    }
}

module.exports = conectarDB

*/