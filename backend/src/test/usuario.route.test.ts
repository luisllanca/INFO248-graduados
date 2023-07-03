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
  it("Deberia retornar un user en forma de json", async () => {
    const res = await request(app).get(`/user/${1}`);
    expect(res.body.ok).toBe(true);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("Usuarios");
  });
});

const user = {
  email: "jh@g.com"
};

describe(`POST /user/login`, () => {
  it("Deberia retornar un  en forma de json", async () => {
    const res = await request(app).post(`/user/login`).send(user);
    expect(res.body.ok).toBe(true);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("usuario");
  });
});

// describe(`POST /login`, () => {
//   it("Deberia registrar usuario un  en forma de json", async () => {
//     const res = await request(app).post(`/registrar/admin`).send(user);
//     console.log(res);
//     // console.log(res.body);
//     expect(res.body.ok).toBe(true);
//     // expect(res.statusCode).toBe(404);
//     // expect(res.body).toHaveProperty("Usuarios");
//     // console.log(res);
//     // console.log(res.body);
//   });
// });