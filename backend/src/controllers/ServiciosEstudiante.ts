
import EstudianteModel from "../models/EstudianteModel";
import { Request, Response } from "express";

export class ServiciosEstudiantes {

  constructor(){
  }

  async getEstudiantes(req: Request, res: Response){
    try {
      const estudiantes = await EstudianteModel.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
    //   console.log(estudiantes);
      // const response = await JSON.parse(JSON.stringify(estudiantes));
      res.status(200).json({
        ok: true,
        msg: "Estudiantes obtenidos con exito",
        Estudiantes: estudiantes,
      });
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            ok: false,
            msg: "Error al obtener los estudiantes" 
        });
    }
  };

  async getEstudianteId(req: Request, res: Response){
    // console.log(req.params);
    try {
      const id = req.params.id;
      const estudiantes = await EstudianteModel.findByPk(parseInt(id), {
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
    //   console.log(estudiantes);
      res.status(200).json({
        ok: true,
        Estudiantes: estudiantes,
      });
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            ok: false, 
            msg: "Error al obtener estudiante por id" 
        });
    }
  };

// //Corregir esta, validar
//   async createEstudiante(req: Request, res: Response){
//     try {
//       const {monto, tipo, img, id_estudiante} = req.body;

//       const estudiante = await EstudianteModel.findByPk(id_estudiante);
//       if(!estudiante){
//         res.json({
//           ok: false,
//           msg: "Estudiante no encontrado"
//         });
//         return;
//       }
//       const fechaActual = new Date();
//       fechaActual.setUTCHours(fechaActual.getUTCHours() - 4);
//       const estudiante = await EstudianteModel.create({
//         fecha: fechaActual,
//         tipo: tipo,
//         monto: monto,
//         img: img,
//         id_estudiante: id_estudiante
//       });
//       // console.log(estudiantes);
//       res.json({
//         ok: true,
//         msg: "Estudiante creado",
//         Estudiantes: estudiante,
//       });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             ok: false,
//             msg: "Error al crear el estudiante" 
//         });
//     }
//   };

//   async deleteEstudianteId(req: Request, res: Response){
//     try {
//       const id = req.params.id;
//       const estudiante = await EstudianteModel.findByPk(parseInt(id), {
//         attributes: { exclude: ["createdAt", "updatedAt"] },
//       });
//       console.log(estudiante);
//       if(!estudiante){
//         res.json({
//           ok: false,
//           msg: "Estudiante no encontrado"
//         });
//         return;
//       }
//       await EstudianteModel.destroy({
//         where: {id: id}
//       });
//       res.json({
//         ok: true,
//         msg: "Estudiante borrado con exito",
//         Estudiante: estudiante,
//       });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ 
//           ok: false,
//           msg: "Error" 
//         });
//     }
//   };
// Corregir 
//   async updateEstudianteById(req: Request, res: Response){
//     // console.log(req.params);
//     try {
//       const id = req.params.id;
//       const estudiante = await EstudianteModel.findByPk(parseInt(id), {
//         attributes: { exclude: ["createdAt", "updatedAt"] },
//       });
//       console.log(estudiante);
//       if(!estudiante){
//         res.json({
//           ok: false,
//           msg:"Error al buscar estudiante por id" 
//         });
//       }
//       await EstudianteModel.update(
//         req.body,
//         { where: { id: id } }
//       );
//       res.json({
//         ok: true,
//         msg: "Estudiante actualizado",
//         Estudiante: estudiante,
//       });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ 
//           ok: false,
//           msg: "Error" 
//         });
//     }
//   };
}