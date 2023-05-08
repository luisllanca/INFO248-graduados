export class Usuario {
  email: string;
  password: string;
  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  visualizarPerfilPersonal() {
    return console.log("Mostrando datos");
  }
  cambiarDatosPersonales(password: string) {
    this.password = password;
    return console.log("Datos actualizados correctamente");
  }
}
