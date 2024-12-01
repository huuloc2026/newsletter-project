import { PrismaClient } from "@prisma/client";
import { createServer } from "./server";
import { testPubSub } from "./services/pubsub/test-pubsub";

const PORT = process.env.PORT || 8080;

const prisma = new PrismaClient();
const pubsub = new testPubSub()
const server = createServer({ prisma, pubsub }).listen(PORT, () => {
  console.log(`🚀 🚀 Server ready at: http://localhost:${PORT}`);
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      console.log("Server closed");
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error: Error) => {
  console.error(error);
  exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

process.on("SIGTERM", () => {
  console.info("SIGTERM received");
  if (server) {
    server.close();
  }
});
