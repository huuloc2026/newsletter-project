import express from "express";
import { SignUpHandler } from "./signup";
import { PrismaClient } from "@prisma/client";

export const createNewsletterRouter = (prisma: PrismaClient) => {
  const newsletterRouter = express.Router();
  newsletterRouter.post("/newsletter/signup", SignUpHandler(prisma));
  return newsletterRouter;
};
