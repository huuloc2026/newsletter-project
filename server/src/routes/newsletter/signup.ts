import { Request, Response } from "express";
import { isEmailValid } from "../../utils/ValidEmail";
import { upsertSubscriber } from "src/services/newsletter/newsletterService";

interface SignUpPayload {
  email: string;
}

export const SignUpHandle = () => async (req: Request, res: Response) => {
  try {
    const { email } = req.body as SignUpPayload;
    if (!email) {
      throw new Error("Email is required");
    }
    if (!isEmailValid) {
      throw new Error("Email is not valid");
    }
    console.log(email);
    console.log("SignUpHandler:: Sign Up Successful");

    const newsletterSubscriber = await upsertSubscriber(prisma, email);
    return res.status(201).json(newsletterSubscriber);
  } catch (error) {
    throw new Error("Some thing wrong");
  }
};
