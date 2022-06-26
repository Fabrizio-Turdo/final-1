const express = require('express')
const app = express();
const multer = require('multer');

//Seteo donde se guardaran los files y con que nombres
const almacenamiento = multer.diskStorage({
    destination: function(req, file, cb){
      cb(null, __dirname+"/public/files")
    },
    filename: function(req, file, cb){
      cb(null, file.originalname)
    }
  })


//middlewares
app.use(multer({almacenamiento}).single("thumbnail"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname+"/public"));




const PORT =8080;
const server = app.listen(PORT, ()=>{
    console.log(`El servidor esta escuchando puerto: ${PORT}`)
})
server.on('error', error => console.log(`Error en el servidor ${error}`))