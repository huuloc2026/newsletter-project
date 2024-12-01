import request from "supertest";
import HttpStatus from "http-status";
import { createServer } from "../../src/server";
import { PrismaClient } from "@prisma/client";
import { testPubSub } from "src/services/pubsub/test-pubsub";

describe("health", () => {
  const prisma = new PrismaClient();
  const pubsub = new testPubSub()
  const server = createServer({ prisma, pubsub }).listen(8080);

  afterAll(async () => {
    server.close();
  });

  it("should return 200 if the server is up", async () => {
    await request(server)
      .get("/v1/health")
      .send()
      .expect("ok")
      .expect(HttpStatus.OK);
  });
});
