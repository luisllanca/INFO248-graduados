import { ServicioEncriptacion } from "../clases_negocio/ServicioSeguridad/ServicioEncriptacion";
import EstudianteModel from "../models/EstudianteModel";
import UsuarioModel from "../models/UsuarioModel";

export class ServicioCuenta {
  async loguearse(password: string, email: string) {
    try {
      // Verificar si el usuario ya existe en la base de datos
      const usuarioExistente = await UsuarioModel.findOne({
        where: { email: email, password: password },
      });

      if (!usuarioExistente) {
        console.log("El usuario no existe");
        return null;
      } else {
        return usuarioExistente;
        console.log("Usuario logeado:", usuarioExistente);
      }
    } catch (error) {
      console.error("Error al logear usuario:", error);
    }
  }

  desloguearse(id: number) {
    console.log("Cerrando sesión...");
  }
  async cambiarContraseña(id: number, password: string) {
    try {
      // Buscar el estudiante en la base de datos por su ID

      const estudiante = await EstudianteModel.findByPk(id, {
        include: [
          {
            model: UsuarioModel,
            as: "usuario",
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        ],
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });

      if (estudiante) {
        // Obtener el usuario asociado al estudiante
        const usuario = estudiante.usuario;

        if (usuario) {
          // Cambiar la contraseña del usuario
          usuario.password = password;

          // Guardar los cambios en la base de datos
          await usuario.save();

          console.log("Contraseña actualizada correctamente: ", password);
          return usuario;
        } else {
          console.log("Usuario no encontrado");
        }
      } else {
        console.log("Estudiante no encontrado");
      }
    } catch (error) {
      console.error("Error al cambiar la contraseña:", error);
    }
  }

  async registrarUsuario(
    nombre: string,
    apellido: string,
    password: string,
    email: string
  ) {
    try {
      // Verificar si el usuario ya existe en la base de datos
      const usuarioExistente = await UsuarioModel.findOne({
        where: { email: email },
      });

      if (usuarioExistente) {
        console.log("El usuario ya está registrado");
        return null;
      }

      const usuario = await UsuarioModel.create({
        nombre,
        apellido,
        password,
        email,
      });

      console.log("Usuario registrado:", usuario.toJSON());
      return usuario;
    } catch (error) {
      console.error("Error al registrar usuario:", error);
    }
  }
}
