
import PersonalAdministrativoModel from "../models/PersonalAdministrativoModel";
import { Request, Response } from "express";
import UsuarioModel from "../models/UsuarioModel";

export class ServiciosPersonalAdministrativo{
  constructor(){
  }

  async getPersonalAdministrativo(req: Request, res: Response){
    try {
      const personalAdministrativo = await PersonalAdministrativoModel.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      // console.log(personalAdministrativo);
      // const response = await JSON.parse(JSON.stringify(personalAdministrativo));
      res.status(200).json({
        ok: true,
        PersonalAdministrativo: personalAdministrativo,
        msg: "Personales administrativos obtenidos correctamente"
      });
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
          ok:false,
          msg: "Error al obtener personalAdministrativo" 
        });
    }
  };

  async getPersonalAdministrativoId(req: Request, res: Response){
    // console.log(req.params);
    try {
      const id = req.params.id;
      const personalAdministrativo = await PersonalAdministrativoModel.findByPk(parseInt(id), {
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      // console.log(personalAdministrativo);
      res.status(200).json({
        ok: true,
        PersonalAdministrativo: personalAdministrativo,
        msg: "Personal administrativo obtenido correctamente"
      });
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
          ok: false,
          msg: "Error al obtener Personal administrativo por id" 
        });
    }
  };

  async getAdminByUser(req: Request, res: Response){
    // console.log(req.params);
    try {
      const idUser = req.params.id;
      const personalAdministrativo = await PersonalAdministrativoModel.findOne({
        where: { id_usuario: idUser },
      });

      res.status(200).json({
        ok: true,
        PersonalAdministrativo: personalAdministrativo,
      });
      console.log(personalAdministrativo);
    } catch (error) {
      console.error(error);
        res.status(500).json({ 
            ok: false, 
            msg: "Error al obtener admin por id de usuario" 
        });
    }
  };

  async editarDatosPersonales(req: Request, res: Response){
    // console.log(req.params);
    try {
      const idUser = req.params.id;
      const {nombre, apellido, cargo} = req.body;

      await PersonalAdministrativoModel.update(
        {cargo},
        { where: { id_usuario: idUser } }
      );

      await UsuarioModel.update(
        {nombre, apellido},
        { where: { id: idUser } }
      );

      res.status(200).json({
        ok: true
      });
    } catch (error) {
      console.error(error);
        res.status(500).json({ 
            ok: false, 
            msg: "Error al actualizar usuario" 
        });
    }
  };

//Corregir esta, validar
//   async createPersonalAdministrativo(req: Request, res: Response){
//     try {
//       // const {tipo, monto, fechaAsi, fechaExp, descripcion, id_estudiante} = req.body;
//       const personalAdministrativo = await PersonalAdministrativoModel.create(req.body);
//       // console.log(personalAdministrativo);
//       res.status(201).json({
//         ok:true,
//         PersonalAdministrativo: personalAdministrativo,
//       });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ 
//           ok: true,
//           msg: "Error al crear la beca" 
//         });
//     }
//   };

//   async deletePersonalAdministrativoId(req: Request, res: Response){
//     // console.log(req.params);
//     try {
//       const id = req.params.id;
//       const beca = await PersonalAdministrativoModel.findByPk(parseInt(id), {
//         attributes: { exclude: ["createdAt", "updatedAt"] },
//       });
//       // console.log(beca);
//       if(!beca){
//         res.status(404).json({
//           ok: false,
//           msg: "Error beca no encontrada"
//         });
//         return;
//       }
//       await PersonalAdministrativoModel.destroy({
//         where: {id: id}
//       });
//       res.status(200).json({
//         ok: true,
//         PersonalAdministrativo: beca,
//       });
//     } catch (error) {
//         // console.error(error);
//         res.status(500).json({ 
//           ok: false,
//           msg: "Error al buscar beca por id" 
//         });
//     }
//   };
// Corregir 
//   async updatePersonalAdministrativoById(req: Request, res: Response){
//     // console.log(req.params);
//     try {
//       const id = req.params.id;
//       const beca = await PersonalAdministrativoModel.findByPk(parseInt(id), {
//         attributes: { exclude: ["createdAt", "updatedAt"] },
//       });
//       // console.log(beca);
//       if(!beca){
//         res.status(404).json({
//           ok: false,
//           msg: "PersonalAdministrativo no encontrada"
//         });
//         return;
//       }
//       await PersonalAdministrativoModel.update(
//         req.body,
//         { where: { id: id } }
//       );
//       res.status(200).json({
//         ok: true,
//         msg: "PersonalAdministrativo actualizada",
//         PersonalAdministrativo: beca,
//       });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ 
//           ok: false,
//           msg: "Error al buscar beca por id" 
//         });
//     }
//   };
}