import { Request, Response } from "express";
import { Estudiante } from "../../controllers/Usuario/Estudiante";
import EstudianteModel from "./EstudianteModel";
import { Identifier } from "sequelize";

class EstudianteController {
  // async crearEstudiante(req: Request, res: Response): Promise<Response> {
  //   try {
  //     const { id, nombre, email, password, rut, carrera } = req.body;
  //     const estudiante = new Estudiante(
  //       id,
  //       nombre,
  //       email,
  //       password,
  //       rut,
  //       carrera
  //     );
  //     const estudianteModel = await EstudianteModel.create(estudiante.toJSON());
  //     return res.status(201).json(estudianteModel);
  //   } catch (error) {
  //     console.error(error);
  //     return res.status(500).json({ mensaje: "Error al crear el estudiante" });
  //   }
  // }

  async obtenerEstudiantes(): Promise<{}> {
    try {
      const estudiantes = await EstudianteModel.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });

      return estudiantes;
    } catch (err) {
      return JSON.stringify(err);
    }
  }

  async filtrarEstudiante(id: Identifier | undefined): Promise<{}> {
    try {
      const estudiante = await EstudianteModel.findByPk(id, {
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      if (!estudiante) {
        throw new Error("Estudiante no encontrado");
      }
      return estudiante;
    } catch (error) {
      return JSON.stringify(error);
    }
  }
  // Otros métodos para actualizar y eliminar estudiantes

  //   async actualizarEstudiante(req: Request, res: Response): Promise<Response> {
  //     try {
  //       const { id } = req.params;
  //       const { nombre, email, password, carrera } = req.body;

  //       const estudiante = await EstudianteModel.findByPk(id);
  //       if (!estudiante) {
  //         return res.status(404).json({ mensaje: "Estudiante no encontrado" });
  //       }

  //       estudiante. = nombre;
  //       estudiante.edad = edad;
  //       estudiante.email = email;

  //       await estudiante.save();

  //       return res.status(200).json(estudiante);
  //     } catch (error) {
  //       console.error(error);
  //       return res
  //         .status(500)
  //         .json({ mensaje: "Error al actualizar el estudiante" });
  //     }
  //   }
}
//   async eliminarEstudiante(req: Request, res: Response): Promise<Response> {
//     try {
//       const { id } = req.params;

//       const estudiante = await EstudianteModel.findByPk(id);
//       if (!estudiante) {
//         return res.status(404).json({ mensaje: "Estudiante no encontrado" });
//       }

//       await estudiante.destroy();

//       return res
//         .status(200)
//         .json({ mensaje: "Estudiante eliminado correctamente" });
//     } catch (error) {
//       console.error(error);
//       return res
//         .status(500)
//         .json({ mensaje: "Error al eliminar el estudiante" });
//     }
//   }
// }

export default EstudianteController;
