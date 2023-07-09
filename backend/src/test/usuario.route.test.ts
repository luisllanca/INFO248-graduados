//@ts-check
import request from "supertest";
import { app } from "../server/server";

// const port = process.env.PORT || 9000;

describe("GET /user", () => {
  it("Deberia retornar la lista de user en forma de json", async () => {
    const res = await request(app).get("/user");
    expect(res.body.ok).toBe(true);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("Usuarios");
    // console.log(res.body);
  });
});

const id_user = 1;
describe(`GET /user/${id_user}`, () => {
  it("Deberia retornar un user en forma de json", async () => {
    const res = await request(app).get(`/user/${id_user}`);
    expect(res.body.ok).toBe(true);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("Usuarios");
  });
});

const email_admin = "email@example.com1"; // Este email debe ser nuevo
const userLogin = {
  email: email_admin
};

const userAdmin ={
  nombre: "admin",
  apellido: "createdbyjest",
  rol: "Admin",
  email: email_admin,
  cargo: "admin"
}

describe(`POST /user/registrar/admin`, () => {
  it("Deberia registrar usuario y retornarlo en forma de json", async () => {
    const res = await request(app).post(`/user/registrar/admin`).send(userAdmin);
    // console.log(res);
    // console.log(res.body);
    expect(res.body.ok).toBe(true);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("Usuario");
    expect(res.body).toHaveProperty("Admin");
    // console.log(res);
    // console.log(res.body);
  });
});


const email_st = "email.studiante@gmail.com"; // El email no debe existir
const rut_st = "2002131-0"; // El rut del estudiante no debe existir en la bd
const userEstudiante ={
  nombre: "estudiante",
  apellido: "createdbyjest",
  rol: "Estudiante",
  email: email_st,
  programa: "programa",
  carrera: "Informatica",
  rut: rut_st
}

describe(`POST /user/registrar/estudiante`, () => {
  it("Deberia registrar usuario y retornarlo en forma de json", async () => {
    const res = await request(app).post(`/user/registrar/estudiante`).send(userEstudiante); 
    // console.log(res);
    // console.log(res.body);
    expect(res.body.ok).toBe(true);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("Usuario");
    expect(res.body).toHaveProperty("Estudiante");
    // console.log(res);
    // console.log(res.body);
  });
});

describe(`POST /user/login`, () => {
  it("Deberia retornar un user en forma de json", async () => {
    const res = await request(app).post(`/user/login`).send(userLogin);
    expect(res.body.ok).toBe(true);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("usuario");
  });
});