import { authMiddleware } from "@/app/api/_Middleware/Auth";
import { errorHandler } from "@/app/api/_Utils/ErrorHandling";
import { signToken } from "@/app/api/_Utils/Jwt";
import { getTemplate, sendEmail } from "@/app/api/_Utils/NodeMailer";
import { prisma } from "@/app/api/_Utils/Prisma";
import { successCreated } from "@/app/api/_Utils/SuccessHandling";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  //Recibir la verificacion
  try {
    const authResult = await authMiddleware(request);
    if (authResult instanceof NextResponse) {
      const unpackToken = await authResult.json();
      await prisma.user.update({
        omit: {
          password: true,
        },
        where: { email: unpackToken.email },
        data: {
          verified: true,
        },
      });
      return successCreated("El usuario a sido validado", { validated: true });
    }
    throw authResult;
  } catch (error: any) {
    return errorHandler(error);
  }
}

export async function POST(request: Request) {
  //Pedir la vefiricacion
  const { email } = await request.json();
  try {
    if (!email) throw { code: "S003", message: "There are some missing parameters" };
    const authResult = await authMiddleware(request);
    if (authResult instanceof NextResponse) {
      const user = await prisma.user.findUnique({
        omit: { password: true },
        where: { email },
      });
      if (!user) throw { code: "S001", message: "The user was not found" };
      if (user.verified) throw { code: "S005", message: "The user is already verified" };
      const token = await signToken({ email }, "1h");
      console.log(token)
      const template =
        getTemplate({ username: user.username }, token, "validateEmail") || null;
      if (template) await sendEmail(email, "Verifica tu email", template);

      return successCreated("Se ha enviado el email", {});
    }
    throw authResult;
  } catch (error: any) {
    return errorHandler(error);
  }
}
