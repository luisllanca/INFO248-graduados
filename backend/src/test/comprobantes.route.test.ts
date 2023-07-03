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

describe(`GET /comprobantes/${1}`, () => {
  it("Deberia retornar un comprobante en forma de json", async () => {
    const res = await request(app).get(`/comprobantes/${1}`);
    expect(res.body.ok).toBe(true);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("Comprobantes");
    // console.log(res.body);

  });
});

describe(`GET /comprobantes/estudiante/${2}`, () => {
  it("Deberia retornar un comprobante en forma de json", async () => {
    const res = await request(app).get(`/comprobantes/estudiante/${2}`);
    expect(res.body.ok).toBe(true);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("Comprobantes");
    // console.log(res.body);
  });
});