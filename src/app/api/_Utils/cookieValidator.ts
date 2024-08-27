import { decript } from "@/libs/TokenHandler";
import { NextRequest } from "next/server";

export const cookieValidator = async (req: NextRequest) => {
  const cookie = req.cookies.get("token")?.value;
  if (!cookie)
    throw {
      code: "S003",
      message: "The token of the user is either invalid or expired",
    };
  const tokenDecript = (await decript(cookie)) as {
    userId: string;
    exp: number;
  };
  if (!tokenDecript) throw { code: "S006", message: "Expired or incorrect token" };
  return tokenDecript
}