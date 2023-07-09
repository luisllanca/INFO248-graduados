//@ts-check
import request from "supertest";
import { app } from "../server/server";

// const port = process.env.PORT || 9000;

describe("GET /estudiantes", () => {
  it("Deberia retornar la lista de estudiantes en forma de json", async () => {
    const res = await request(app).get("/estudiantes");
    expect(res.body.ok).toBe(true);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("Estudiantes");
    // console.log(res.body);
  });
});

describe(`GET /estudiantes/${1}`, () => {
  it("Deberia retornar un estudiante en forma de json", async () => {
    const res = await request(app).get(`/estudiantes/${1}`);
    expect(res.body.ok).toBe(true);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("Estudiantes");
    // console.log(res.body);

  });
});

describe(`GET /estudiantes/user/${1}`, () => {
  it("Deberia retornar el usuario de un estudiante en forma de json", async () => {
    const res = await request(app).get(`/estudiantes/user/${1}`);
    expect(res.body.ok).toBe(true);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("Estudiantes");
    // console.log(res.body);

  });
});

const estudiante = { // para editar datos personales del estudiante
  nombre: "Modificado",
  apellido: "Por ",
  programa: "Jest",
  carrera: "Informatica"
}
var id_estudiante = 1; // La id del estudiante debe existir

describe(`PUT /estudiantes/datos/${id_estudiante}`, () => {
  it("Deberia retornar el usuario de un estudiante en forma de json", async () => {
    const res = await request(app).put(`/estudiantes/datos/${id_estudiante}`).send(estudiante);
    expect(res.body.ok).toBe(true);
    expect(res.statusCode).toBe(200);
    // expect(res.body).toHaveProperty("Estudiantes");
    // console.log(res.body);

  });
});