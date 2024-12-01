import express from "express";
import { SignUpHandler } from "./signup";
import { PrismaClient } from "@prisma/client";
import { PubSubService } from "src/services/pubsub/types";

export const createNewsletterRouter = (prisma: PrismaClient, pubSub: PubSubService) => {
  const newsletterRouter = express.Router();
  newsletterRouter.post("/newsletter/signup", SignUpHandler(prisma, pubSub));
  return newsletterRouter;
};
