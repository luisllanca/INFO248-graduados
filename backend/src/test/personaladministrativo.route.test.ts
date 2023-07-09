//@ts-check
import request from "supertest";
import { app } from "../server/server";

// const port = process.env.PORT || 9000;

describe("GET /admin", () => {
  it("Deberia retornar la lista de admin en forma de json", async () => {
    const res = await request(app).get("/admin");
    expect(res.body.ok).toBe(true);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("PersonalAdministrativo");
    // console.log(res.body);
  });
});
var id_admin = 1; // La id del admin debe existir


describe(`GET /admin/${id_admin}`, () => {
  it("Deberia retornar un admin en forma de json", async () => {
    const res = await request(app).get(`/admin/${id_admin}`);
    expect(res.body.ok).toBe(true);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("PersonalAdministrativo");
    // console.log(res.body);

  });
});

describe(`GET /admin/user/${id_admin}`, () => {
  it("Deberia retornar un admin en forma de json", async () => {
    const res = await request(app).get(`/admin/user/${id_admin}`);
    expect(res.body.ok).toBe(true);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("PersonalAdministrativo");
    // console.log(res.body);

  });
});

const admin = { // para editar datos personales del admin
  nombre: "Modificado",
  apellido: "PorJest ",
  cargo: "Secretaria",
}

describe(`PUT /admin/datos/${id_admin}`, () => {
  it("Deberia retornar el usuario de un admin en forma de json", async () => {
    const res = await request(app).put(`/admin/datos/${id_admin}`).send(admin);
    expect(res.body.ok).toBe(true);
    expect(res.statusCode).toBe(200);
    // expect(res.body).toHaveProperty("Estudiantes");
    // console.log(res.body);

  });
});