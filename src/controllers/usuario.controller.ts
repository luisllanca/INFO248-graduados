export interface Usuario {
  email: string;
  password: string;

  visualizarPerfilPersonal(): void;
  cambiarDatosPersonales(password: string): void;
}
