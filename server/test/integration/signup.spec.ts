import request from "supertest";
import HttpStatus from "http-status";
import { createServer } from "../../src/server";
import { PrismaClient } from "@prisma/client";
import { testPubSub } from "src/services/pubsub/test-pubsub";

describe("signup", () => {
    const prisma = new PrismaClient();
    const pubsub = new testPubSub()
    const server = createServer({ prisma, pubsub }).listen(8080);

    afterAll(async () => {
        server.close();
        await prisma.newsletterSubscriber.deleteMany();
        await prisma.$disconnect()
    });

    beforeEach(async () => {
        await prisma.newsletterSubscriber.deleteMany();
    })

    it("throw 400 if not sent email in the body ", async () => {
        await request(server)
            .post("/v1/newsletter/signup")
            .send()
            .expect(HttpStatus.BAD_REQUEST);
    });

});
