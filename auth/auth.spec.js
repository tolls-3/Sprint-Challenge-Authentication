const request = require("supertest");
const server = require("../api/server");
const db = require("../database/dbConfig");
const Users = require("./auth-model");
beforeEach(async () => {
  await db("users").truncate();
});

describe("[POST] register", () => {
  it("returns registered user", () => {
    return request(server)
      .post("/api/auth/register")
      .send({
        username: "Tolu",
        password: "verylongpassword"
      })
      .expect(201)
      .then(res => {
        const registeredUser = res.body.user.username;

        expect(registeredUser).toEqual("Tolu");
      });
  });
});

describe("[POST] login", () => {
  test("returns status 200", async () => {
    await request(server).post('/api/auth/register')
    .send({username: 'Tolu', password: 'verylongpassword'})

    return request(server)
      .post("/api/auth/login")
      .send({
        username: "Tolu",
        password: "verylongpassword"
      })
      .expect(200)
     
  });
});
