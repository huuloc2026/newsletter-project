import { NextFunction, Request, response, Response } from "express";
import { isEmailValid } from "../../utils/ValidEmail";
import { upsertSubscriber } from "../../services/newsletterService";
import { PrismaClient } from "@prisma/client";
import { ErrorCode } from "../../errors/api-error";
import httpStatus from "http-status";


interface SignUpPayload {
  email: string;
}

export const SignUpHandler = (prisma: PrismaClient) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.body as SignUpPayload;
    if (!email) {
      throw new ErrorCode("ERR-001", "email")
    }
    if (!(isEmailValid(email))) {
      throw new ErrorCode("ERR-002", "email")
    }
    console.log(email);
    console.log("SignUpHandler:: Sign Up Successful");

    const newsletterSubscriber = await upsertSubscriber(prisma, email);
    console.log("SignUpHandler:::Success");
    return res.status(httpStatus.OK).json({

      newsletterSubscriber
    });
  } catch (error: unknown) {
    if (!(error instanceof ErrorCode)) {
      console.log("SignUpHandler:::false");
      // Nếu không phải là ErrorCode, ném lại lỗi chung
      return res.status(httpStatus.BAD_REQUEST).json({ message: "Internal Server Error", error: String(error) });
    }

    // Xử lý các mã lỗi đặc biệt ERR-001, ERR-002
    if (["ERR-001", "ERR-002"].includes(error.code)) {
      return res.status(httpStatus.BAD_REQUEST).json({ message: error.message, code: error.code });
    }

    // Xử lý các lỗi khác
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message, code: error.code });
  }
};
