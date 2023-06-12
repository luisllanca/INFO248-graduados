export abstract class Usuario {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  password: string;

  constructor(
    id: number,
    nombre: string,
    apellido: string,
    email: string,
    password: string
  ) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.password = password;
  }

  getId() {
    return this.id;
  }

  setId(id: number) {
    this.id = id;
  }

  getNombre() {
    return this.nombre;
  }

  setNombre(nombre: string) {
    this.nombre = nombre;
  }

  getApellido() {
    return this.apellido;
  }

  setApellido(apellido: string) {
    this.apellido = apellido;
  }
  getEmail() {
    return this.email;
  }

  setEmail(email: string) {
    this.email = email;
  }

  getPassword() {
    return this.password;
  }
  setPassword(password: string) {
    this.password = password;
  }

  // abstract visualizarPerfilPersonal(): void;
  // abstract cambiarDatosPersonales(id: number, password: string): void;
}
