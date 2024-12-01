import express from "express";
import { SignUpHandle } from "./signup";

export const createNewsletterRouter = () => {
  const newsletterRouter = express.Router();
  newsletterRouter.post("/newsletter/signup", SignUpHandle());
  return newsletterRouter;
};
