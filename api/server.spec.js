const request = require("supertest");
const server = require("./server");

describe("server", () => {
  describe("[GET] / endpoint", () => {
    test("the db env is testing", () => {
      expect(process.env.DB_ENV).toBe("testing");
    });
    test("should return status 200", async () => {
      const response = await request(server).get("/");
      expect(response.status).toBe(200);
    });
    test("should return api:up", () => {
    return request(server)
        .get("/")
        .then(response => {
          expect(response.body).toEqual({ api: "up" });
        });
    });
  
  });
});
