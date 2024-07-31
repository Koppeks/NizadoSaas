import { errorHandler} from "@/app/api/_Utils/ErrorHandling";
import { prisma } from "@/app/api/_Utils/Prisma";
import { successCreated } from "@/app/api/_Utils/SuccessHandling";
import { Prisma } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import * as argon2 from "argon2";

export async function POST(request: Request) {
  const body = await request.json();

  try {
    if (
      !body.email ||
      !body.username ||
      !body.password ||
      !body.repeatPassword
    ) throw ({code: "S003", message: "There are some missing parameters"})

    if(body.password !== body.repeatPassword) throw ({code: "S004", message:"The password doesnt match"})
    const hashArgonPassword = await argon2.hash(body.password)

    const newUser = await prisma.model_User.create({
      omit:{
        password: true
      },
      data: {
        email: body.email,
        username: body.username,
        password: hashArgonPassword,
      },
    });
    if(newUser instanceof Prisma.PrismaClientKnownRequestError) console.log(newUser)
    return successCreated("Success creating a new user", newUser)
  } catch (error: any) {
    if(error instanceof PrismaClientKnownRequestError) {
      const prismaError = {
        code: error.code,
        message: error.name
      }
      return errorHandler(prismaError)
    }else{
      
    }
    return errorHandler(error)
  }
}
