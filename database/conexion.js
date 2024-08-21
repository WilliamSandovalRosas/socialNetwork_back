import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connection = async()=>{
    try{
        await connect(process.env.MONGODB_URI);
        console.log("Conexión exitosa a Pruebas Talent Tech database socialNetwork")
    }
    catch(error){
        console.log("Conexión fallida a database socialNetwork",error);
        throw new Error("Conexión fallida a la base de datos");
    }
}

export default connection;