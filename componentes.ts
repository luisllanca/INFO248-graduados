class Usuario {

    registrarse(): void{

    }
    loguearse(): void{

    }
    desloguearse(): void{

    }
}
  
class Estudiante extends Usuario{
    comprobante: Comprobante[];
    Beca: Becas;

    cambiarDatosPersonales(): void{

    }
    visualizarPerfil(): void{

    }
    subirComprobante(): void{

    }
    visualizarComprobante(): void{

    }
    eliminarComprobante(): void{

    }
}
  
class Comprobante {

    constructor(public monto: number,public fecha: Date, public img:string) {
        this.monto = monto;
        this.fecha = fecha;
        this.img = img;
    }
    
    especificarMonto(monto: number): void{

    }
    editarMonto(monto: number): void{

    }

}

class Becas{    
    constructor(public tipo: string, public monto: number,public fechaAsignacion: Date, public fechaExpiracion: Date ) {
        this.tipo =  tipo;
        this.monto= monto;
        this.fechaAsignacion = fechaAsignacion;
        this.fechaExpiracion = fechaExpiracion;
    }

    asignarBeca(): void{

    }
    eliminarBeca(): void{

    }
    verBecaAsignada(): void{

    }
}

class Gestion extends Usuario{

    verMatriculasEstudiantes(): void{

    }
    revisarComprobantesEstudiantes(): void{

    }
    verDatosEstudiantes(): void{

    }
    asignarBecaEstudiante(): void{

    }
    filtrarEstudiantes(): void{

    }
    revisarHistorialPagos(): void{

    }
    eliminarBecaEstudiante(): void{

    }
}