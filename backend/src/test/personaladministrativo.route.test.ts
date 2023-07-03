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

describe(`GET /admin/${1}`, () => {
  it("Deberia retornar un admin en forma de json", async () => {
    const res = await request(app).get(`/admin/${1}`);
    expect(res.body.ok).toBe(true);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("PersonalAdministrativo");
    // console.log(res.body);

  });
});

describe(`GET /admin/user/${1}`, () => {
  it("Deberia retornar un admin en forma de json", async () => {
    const res = await request(app).get(`/admin/user/${1}`);
    expect(res.body.ok).toBe(true);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("PersonalAdministrativo");
    // console.log(res.body);

  });
});