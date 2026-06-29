const request = require("supertest");
const app = require("../src/app");
const pool = require("../src/db/pool");

describe("Authors API", () => {
  test("GET /authors debe devolver una lista de authors", async () => {
    const response = await request(app).get("/authors");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("GET /authors/1 debe devolver un author", async () => {
    const response = await request(app).get("/authors/1");

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("email");
  });

  test("GET /authors/9999 debe devolver 404", async () => {
    const response = await request(app).get("/authors/9999");

    expect(response.statusCode).toBe(404);
  });
});

afterAll(async () => {
  await pool.end();
});
