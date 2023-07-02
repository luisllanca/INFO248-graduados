import { ServicioEncriptacion } from "../clases_negocio/ServicioSeguridad/ServicioEncriptacion";
import EstudianteModel from "../models/EstudianteModel";
import UsuarioModel from "../models/UsuarioModel";

import { Request, Response } from "express";

export class ServiciosUsuario {
  constructor(){
  }

  async getUsuarios(req: Request, res: Response){
    try {
      const usuarios = await UsuarioModel.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      console.log(usuarios);
      // const response = await JSON.parse(JSON.stringify(usuarios));
      res.status(200).json({
        ok: true,
        msg: "Usuarios obtenidos con exito",
        Usuarios: usuarios,
      });
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            ok: false,
            msg: "Error al obtener los usuarios" 
        });
    }
  };

  async getUsuarioId(req: Request, res: Response){
    // console.log(req.params);
    try {
      const id = req.params.id;
      const usuarios = await UsuarioModel.findByPk(parseInt(id), {
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      // console.log(usuarios);
      res.status(200).json({
        ok: true,
        Usuarios: usuarios,
      });
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            ok: false, 
            msg: "Error al obtener usuario por id" 
        });
    }
  };

  async createUsuario(req: Request, res: Response){
    try {
      const {nombre, apellido, password, email} = req.body;

      const usuarioExistente = await UsuarioModel.findOne({
        where: { email: email },
      });
      if(usuarioExistente){
        res.status(400).json({
          ok: false,
          msg: "El usuario ya esta registrado"
        });
        return;
      }
      const usuario = await UsuarioModel.create({
        nombre,
        apellido,
        password,
        email
      });
      // console.log(usuarios);
      res.json({
        ok: true,
        msg: "Usuario registrado correctamente",
        Usuario: usuario,
      });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error al crear el usuario" 
        });
    }
  };

  async createUsuarioEstudiante(req: Request, res: Response){
    try {
      const {nombre, apellido, password, email, programa, carrera, rut} = req.body;

      const usuarioExistente = await UsuarioModel.findOne({
        where: { email: email },
      });
      if(usuarioExistente){
        res.status(400).json({
          ok: false,
          msg: "El usuario ya esta registrado"
        });
        return;
      }
      const estudianteExistente = await EstudianteModel.findOne({
        where: { rut: rut },
      });
      if(estudianteExistente){
        res.status(400).json({
          ok: false,
          msg: "El estudiante ya esta registrado"
        });
        return;
      }

      const usuario = await UsuarioModel.create({
        nombre,
        apellido,
        password,
        email
      });
      const id_usuario = usuario.id;
      const estudiante = await EstudianteModel.create({
        id_usuario,
        rut,
        programa,
        carrera
      });
      // console.log(usuarios);
      res.json({
        ok: true,
        msg: "Usuario de estudiante registrado correctamente",
        Usuario: usuario,
        Estudiante: estudiante
      });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error al crear el usuario" 
        });
    }
  };
  
  async loguearse(req: Request, res:Response) {
    try {
      const {email, password} = req.body;
      const usuario = await UsuarioModel.findOne({
        where: { email: email, password: password},
      });
      if(!usuario){
        res.status(404).json({
          ok: false,
          msg: "Usuario no encontrado"
        });
        return;
      }
      // console.log(usuarios);
      res.status(200).json({
        ok: true,
        msg: "Usuario encontrado",
        Usuario: usuario,
      });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Error" 
        });
    }
  }

//   async deleteUsuarioId(req: Request, res: Response){
//     try {
//       const id = req.params.id;
//       const usuario = await UsuarioModel.findByPk(parseInt(id), {
//         attributes: { exclude: ["createdAt", "updatedAt"] },
//       });
//       console.log(usuario);
//       if(!usuario){
//         res.json({
//           ok: false,
//           msg: "Usuario no encontrado"
//         });
//         return;
//       }
//       await UsuarioModel.destroy({
//         where: {id: id}
//       });
//       res.json({
//         ok: true,
//         msg: "Usuario borrado con exito",
//         Usuario: usuario,
//       });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ 
//           ok: false,
//           msg: "Error" 
//         });
//     }
//   };
// // Corregir 
//   async updateUsuarioById(req: Request, res: Response){
//     // console.log(req.params);
//     try {
//       const id = req.params.id;
//       const usuario = await UsuarioModel.findByPk(parseInt(id), {
//         attributes: { exclude: ["createdAt", "updatedAt"] },
//       });
//       console.log(usuario);
//       if(!usuario){
//         res.json({
//           ok: false,
//           msg:"Error al buscar usuario por id" 
//         });
//       }
//       await UsuarioModel.update(
//         req.body,
//         { where: { id: id } }
//       );
//       res.json({
//         ok: true,
//         msg: "Usuario actualizado",
//         Usuario: usuario,
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
