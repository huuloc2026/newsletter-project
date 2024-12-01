import { NextFunction, Request, Response } from "express";
import { isEmailValid } from "../../utils/ValidEmail";
import { upsertSubscriber } from "../../services/newsletterService";
import { PrismaClient } from "@prisma/client";


interface SignUpPayload {
  email: string;
}

export const SignUpHandler = (prisma: PrismaClient) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.body as SignUpPayload;
    if (!email) {
      throw new Error("Email is required");
    }
    if (!(isEmailValid(email))) {
      throw new Error("Email is not valid");
    }
    console.log(email);
    console.log("SignUpHandler:: Sign Up Successful");

    const newsletterSubscriber = await upsertSubscriber(prisma, email);
    console.log("SignUpHandler:::Success");
    return res.status(200).json({

      newsletterSubscriber
    });
  } catch (error) {
    next(error);
  }
};
