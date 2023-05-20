export class Desecriptacion{
    metodo: string;

    constructor(metodo : string) {
        this.metodo = metodo;
    }

    desencriptar(){
        console.log("Desencriptando con metodo "+this.getMetodo());
    }
    
    setMetodo(metodo:string){
        this.metodo = metodo;
    }
    getMetodo(){
        return this.metodo;
    }
}