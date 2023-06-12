import { Identifier } from "sequelize";
import EstudianteModel from "../models/EstudianteModel";
import { Estudiante } from "../clases_negocio/Usuario/Estudiante";
import { Comprobante } from "../clases_negocio/Comprobante";
import { Beca } from "../clases_negocio/Beca";
import ComprobanteModel from "../models/ComprobanteModel";
import BecaModel from "../models/BecaModel";
import UsuarioModel from "../models/UsuarioModel";
import { LocalStorage } from "node-localstorage";

const localStorage = new LocalStorage("./localStorage");

export class ServiciosEstudiante {
  subirComprobante(
    est: Estudiante,
    id: number,
    monto: number,
    fecha: Date,
    img: string,
    tipo: string
  ) {
    const comps = est.getComprobantes();
    const comp = new Comprobante(id, monto, fecha, tipo, img);
    comps.push(comp);
    est.setComprobantes(comps);
  }

  verComprobantes() {
    const estudiantesString = localStorage.getItem("estudiantes");
    if (estudiantesString === null) {
      return [];
    }
    const estudiantes: Estudiante[] = JSON.parse(estudiantesString);
    const comprobantes: Comprobante[] = [];
    estudiantes.forEach((estudiante: Estudiante) => {
      const listaComprobantes: Comprobante[] = estudiante.comprobantes.map(
        (comp) => {
          const { id, monto, fecha, tipo, img } = comp;
          return new Comprobante(id, monto, fecha, tipo, img);
        }
      );
      comprobantes.push(...listaComprobantes);
    });
    return comprobantes;
  }
  editarMonto(idComp: number, monto: number) {
    console.log("Editando comprobante " + idComp + " con monto " + monto);
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
  async obtenerEstudiantes(): Promise<{}> {
    try {
      const estudiantesString = localStorage.getItem("estudiantes");
      if (estudiantesString === null) {
        return {}; // o cualquier valor predeterminado que desees devolver
      }
      const estudiantes = JSON.parse(estudiantesString);
      return estudiantes;
    } catch (error) {
      console.error("Error al obtener los estudiantes:", error);
      throw new Error("Error al obtener los estudiantes");
    }
  }
  async cargarEstudiantes() {
    try {
      const estudiantesModel = await EstudianteModel.findAll({
        include: [
          {
            model: ComprobanteModel,
            as: "comprobantes",
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
          {
            model: BecaModel,
            as: "becas",
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
          {
            model: UsuarioModel,
            as: "usuario",
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        ],
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });

      const estudiantes: Estudiante[] = estudiantesModel.map(
        (estudianteModel) => {
          const { id, rut, carrera, programa, comprobantes, becas, usuario } =
            estudianteModel;
          const { nombre, apellido, email, password } = usuario;

          const listaComprobantes: Comprobante[] =
            comprobantes?.map((comp) => {
              const { id, monto, fecha, tipo, img } = comp;
              return new Comprobante(id, monto, fecha, tipo, img);
            }) || [];

          const listaBecas: Beca[] =
            becas?.map((bec) => {
              const { id, tipo, monto, fechaAsi, fechaExp, descripcion } = bec;
              return new Beca(id, tipo, monto, descripcion, fechaAsi, fechaExp);
            }) || [];

          return new Estudiante(
            id,
            nombre,
            apellido,
            email,
            password,
            rut,
            carrera,
            programa,
            listaComprobantes,
            listaBecas
          );
        }
      );

      localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
    } catch (error) {
      console.error(error);
      throw new Error("Error al cargar los estudiantes");
    }
  }
}

export default ServiciosEstudiante;
