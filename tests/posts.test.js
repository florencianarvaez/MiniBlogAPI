const request = require("supertest");
const app = require("../src/app");
const pool = require("../src/db/pool");

describe("Posts API", () => {
  test("GET /posts debe devolver una lista de posts", async () => {
    const response = await request(app).get("/posts");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("GET /posts/1 debe devolver un post", async () => {
    const response = await request(app).get("/posts/1");

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("title");
    expect(response.body).toHaveProperty("content");
  });

  test("GET /posts/9999 debe devolver 404", async () => {
    const response = await request(app).get("/posts/9999");

    expect(response.statusCode).toBe(404);
  });

  test("GET /posts/author/1 debe devolver posts del author", async () => {
    const response = await request(app).get("/posts/author/1");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

afterAll(async () => {
  await pool.end();
});
