import { errorHandler} from "@/app/api/_Utils/ErrorHandling";
import { prisma } from "@/app/api/_Utils/Prisma";
import { successCreated } from "@/app/api/_Utils/SuccessHandling";
import * as argon2 from "argon2";

export async function POST(request: Request) {

  const body = await request.json();
  try {
    if (
      !body.email ||
      !body.username ||
      !body.password ||
      !body.avatar ||
      !body.subscription
    ) throw ({code: "S001"})

    const hashArgonPassword = await argon2.hash(body.password)
    const newUser = await prisma.model_User.create({
      omit:{
        password: true
      },
      data: {
        email: body.email,
        username: body.username,
        password: hashArgonPassword,
        avatar: body.avatar,
        subscription: body.subscription,
      },
    });
    return successCreated("Success creating a new user", newUser)
  } catch (error: any) {
    return errorHandler(error)
  }
}
