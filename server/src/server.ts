import express, { Express, Response, Request } from "express";
import { createNewsletterRouter } from "./routes/newsletter";
const cors = require("cors");
const path = require("path");
const errorHandler = (error: Error, req: Request, res: Response) => {
  console.log(error);

  res.status(500).json({
    status: false,
    message: error.message || "Internal Server Error",
  });
};

// the server singleton
let server: Express | null = null;

export const createServer = (): Express => {
  if (server) return server;

  server = express();
  server.use(express.static(path.join(__dirname, "build")));

  // middleware setup
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use(
    cors({
      origin: "http://localhost:3001", // Allow only your frontend origin
      methods: ["GET", "POST"], // Specify allowed HTTP methods
      allowedHeaders: ["Content-Type"], // Specify allowed headers
    })
  );

  server.use("/v1", createNewsletterRouter());

  server.use((req, res, next) => {
    next(new Error("Not found"));
  });

  server.use(errorHandler);

  return server;
};
