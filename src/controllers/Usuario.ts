<<<<<<< HEAD:src/controllers/Usuario.ts
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
    return console.log(password);
  }
}
=======
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
    return console.log(password);
  }
}
>>>>>>> eb1cbc18236b2216eee8a724c29d62639f838e13:src/Classes/models/Usuario.ts
