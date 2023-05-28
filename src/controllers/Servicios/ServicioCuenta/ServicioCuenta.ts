import { ServicioEncriptacion } from "../Seguridad/ServicioEncriptacion";

export class ServicioCuenta{
    registrarse(id : number){
        console.log("Registrandose...");
    }

    loguearse(id : number){
        console.log("Login...");
    }

    desloguearse(id : number){
        console.log("Cerrando sesión...");
    }
}