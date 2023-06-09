import * as crypto from 'crypto'

export class Encriptacion {
    metodo: string;

    constructor(metodo : string) {
        this.metodo = metodo;
    }

    encriptar(texto:string):string {
        console.log("Encriptando con metodo "+this.getMetodo()+"...");
        const clave = 'c14v3-5e6Ur4'
        const iv = crypto.randomBytes(16);
        const cipher = crypto.createCipheriv(this.metodo, clave, iv);
        let encrypted = cipher.update(texto, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return `${iv.toString('hex')}:${encrypted}`;
    }
    
    setMetodo(metodo:string){
        this.metodo = metodo;
    }

    getMetodo(){
        return this.metodo;
    }
}