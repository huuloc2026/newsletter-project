import { Request, Response } from "express";
import { isEmailValid } from "../../utils/ValidEmail";

interface SignUpPayload {
  email: string;
}

export const SignUpHandle = (req: Request, res: Response) => {
  try {
    const { email } = req.body as SignUpPayload;
    if (!email) {
      throw new Error("Email is required");
    }
    if (!isEmailValid) {
      throw new Error("Email is not valid");
    }
    console.log(email);
    // return res.status(201).json({
    //   message: "Ok",
    // });
    return res.status(200).json({ message: "Successful SignUp" });
  } catch (error) {
    throw new Error("Some thing wrong");
  }
};
