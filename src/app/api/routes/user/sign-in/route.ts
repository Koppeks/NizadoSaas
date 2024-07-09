import { errorHandler} from "@/app/api/_Utils/ErrorHandling"
import { prisma } from "@/app/api/_Utils/Prisma";
import { successRequest } from "@/app/api/_Utils/SuccessHandling"
import { signToken } from "@/app/api/_Utils/Jwt";
import * as argon2 from "argon2";


export async function POST(request: Request) {
  const {email, password} = await request.json()
  try{
    if(!email || !password) throw ({code: "S003", message: "There are some missing paremeters"})

    const user = await prisma.model_User.findUnique({where: {email}})
    if(!user) throw ({code: "S001", message: "The user was not found"})
    else if (!(await argon2.verify(user.password, password))) throw ({code: "S004", message:"The password doesnt match"})

    const userSafe = await prisma.model_User.findUnique({omit: {password: true} ,where: {email}})
    const newToken = signToken({userId: user.id}, "1h")

    return successRequest("The user is now logged", {token: newToken, user: userSafe})
  }catch(error:any){
    return errorHandler(error)
  }
}
