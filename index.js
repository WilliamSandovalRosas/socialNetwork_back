import express from "express";
import connection  from "./database/conexion.js";

//Mensaje prueba bienvenida

console.log("Mensaje de prueba aplicación socialNetwork_backend");

//Conectando a la DB
connection();

//Creando el servidor Node

const app = express();
const puerto = process.env.PORT || 3900;

//Configurar servidor Node

app.listen(puerto,()=>{
    console.log("Servidor Node en ejecución puerto ",puerto);
});

export default app;
