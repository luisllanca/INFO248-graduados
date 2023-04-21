export class Usuario {
  email: string;
  password: string;
  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
  registrarse() {
    return console.log("Registro exitoso");
  }
  logearse() {
    return console.log("Inicio de sesion conn exito");
  }
  desloguearse() {
    return console.log("Sesion cerrada");
  }
}
