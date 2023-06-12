import { Encriptacion } from "./Encriptacion";
import { Desencriptacion } from "./Desencriptacion";

export class ServicioEncriptacion{
    procesarDatos(){
        console.log("Procesando datos...")
        const encriptador = new Encriptacion('aes-256-ctr');
        const desencriptador = new Desencriptacion('aes-256-ctr');
        const texto = "Texto de prueba";
        const textoEncriptado = encriptador.encriptar(texto);
        const textoDesencriptado = desencriptador.desencriptar(textoEncriptado);
        console.log("Texto original: "+texto)
        console.log("Texto encriptado: "+textoEncriptado)
        console.log("Texto desencriptado: "+textoDesencriptado)
    }
}