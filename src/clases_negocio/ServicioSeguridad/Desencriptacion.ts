import * as crypto from 'crypto'

export class Desencriptacion{
    metodo: string;

    constructor(metodo : string) {
        this.metodo = metodo;
    }

    desencriptar(textoEncriptado:string):string {
        console.log("Desencriptando con metodo "+this.getMetodo()+"...");
        const clave = 'c14v3-5e6Ur4'
        const [ivString, encryptedString] = textoEncriptado.split(':');
        const decipher = crypto.createDecipheriv(this.metodo, clave, Buffer.from(ivString, 'hex'));
        let decrypted = decipher.update(encryptedString, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }
    
    setMetodo(metodo:string){
        this.metodo = metodo;
    }
    getMetodo(){
        return this.metodo;
    }
}