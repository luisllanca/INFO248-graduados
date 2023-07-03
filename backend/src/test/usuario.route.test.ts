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

describe(`GET /user/${1}`, () => {
  it("Deberia retornar un comprobante en forma de json", async () => {
    const res = await request(app).get(`/user/${1}`);
    expect(res.body.ok).toBe(true);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("Usuarios");
    // console.log(res.body);

  });
});

// describe(`GET /user/estudiante/${2}`, () => {
//   it("Deberia retornar un comprobante en forma de json", async () => {
//     const res = await request(app).get(`/user/estudiante/${2}`);
//     expect(res.body.ok).toBe(true);
//     expect(res.statusCode).toBe(200);
//     expect(res.body).toHaveProperty("Usuarios");
//     // console.log(res.body);
//   });
// });