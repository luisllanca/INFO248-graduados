export class Encriptacion {
    metodo: string; 

    constructor(metodo : string) {
        this.metodo = metodo;
    }

    encriptar(){
        console.log("Encriptando con metodo..."+this.getMetodo());
    }
    
    setMetodo(metodo:string){
        this.metodo = metodo;
    }

    getMetodo(){
        return this.metodo;
    }
}