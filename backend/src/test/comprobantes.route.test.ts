//@ts-check
import request from "supertest";
import { app } from "../server/server";

// const port = process.env.PORT || 9000;

describe("GET /comprobantes", () => {
  it("Deberia retornar la lista de comprobantes en forma de json", async () => {
    const res = await request(app).get("/comprobantes");
    expect(res.body.ok).toBe(true);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("Comprobantes");
    // console.log(res.body);
  });
});

var id_comprobante = 1; //id comprobante a actualizar y eliminar

describe(`GET /comprobantes/${id_comprobante}`, () => {
  it("Deberia retornar un comprobante en forma de json", async () => {
    const res = await request(app).get(`/comprobantes/${id_comprobante}`);
    expect(res.body.ok).toBe(true);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("Comprobantes");
    // console.log(res.body);

  });
});

var id_estudiante = 1;
describe(`GET /comprobantes/estudiante/${id_estudiante}`, () => {
  it("Deberia retornar un comprobante en forma de json", async () => {
    const res = await request(app).get(`/comprobantes/estudiante/${id_estudiante}`);
    expect(res.body.ok).toBe(true);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("Comprobantes");
    // console.log(res.body);
  });
});

const new_comprobante = {
  tipo: "Arancel",
  monto: 100,
  img: "a.png",
  id_estudiante: 1,
  extension: "png",
};


describe(`POST /comprobantes/`, () => {
  it("Deberia retornar un comprobante en forma de json", async () => {
    const res = await request(app).post(`/comprobantes/`).send(new_comprobante);
    expect(res.body.ok).toBe(true);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("Comprobantes");
    // id_comprobante = res.body.Comprobantes[0].id;
    // console.log(res.body);
  });
});


const up_comprobante = { // actuailizacion de comprobante
  tipo:"Matricula",
  monto: 1,
}


describe(`PUT /comprobantes/${id_comprobante}`, () => {
  it("Deberia retornar un comprobante en forma de json", async () => {
    const res = await request(app).put(`/comprobantes/${id_comprobante}`).send(up_comprobante);
    expect(res.body.ok).toBe(true);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("Comprobantes");
    // console.log(res.body);
  });
});

describe(`DELETE /comprobantes/${id_comprobante}`, () => {
  it("Deberia retornar un comprobante en forma de json", async () => {
    const res = await request(app).delete(`/comprobantes/${id_comprobante}`);
    expect(res.body.ok).toBe(true);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("Comprobantes");
    // console.log(res.body);
  });
});

