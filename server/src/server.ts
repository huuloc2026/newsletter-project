import express, { Express, Response, Request } from "express";
import { createNewsletterRouter } from "./routes/newsletter";
import { PrismaClient } from "@prisma/client";
import { PubSubService } from "./services/pubsub/types";

interface CreateServerParams {
  prisma: PrismaClient
  pubsub: PubSubService
}

const cors = require("cors");
const path = require("path");
const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: Function
) => {
  console.error(error);

  res.status(500).json({
    status: false,
    message: error.message || "Internal Server Error",
  });
};
// the server singleton
let server: Express | null = null;

export const createServer = ({ prisma, pubsub }: CreateServerParams): Express => {
  if (server) return server;

  server = express();
  server.use(express.static(path.join(__dirname, "build")));

  // middleware setup
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use(
    cors({
      origin: "http://localhost:3001",
      methods: ["GET", "POST"],
      allowedHeaders: ["Content-Type"],
    })
  );

  server.use("/v1", createNewsletterRouter(prisma, pubsub));

  server.use((req, res, next) => {
    res.status(404).json({
      status: false,
      message: "Route not found",
    });
  });

  server.use(errorHandler);

  return server;
};
