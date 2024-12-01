import crypto from "crypto";
export const RandomToken = () => {
  return crypto.randomBytes(64).toString("hex");
};
