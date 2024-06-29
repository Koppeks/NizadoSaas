import { errorHandler} from "@/app/api/_Utils/ErrorHandling"
import { prisma } from "@/app/api/_Utils/Prisma";
import { successCreated } from "@/app/api/_Utils/SuccessHandling"
import { signToken } from "@/app/api/_Utils/Jwt";
import * as argon2 from "argon2";


export async function POST(request: Request) {
  const {email, password} = await request.json()
  try{
    if(!email || !password) throw ({code: "S001"})

    const user = await prisma.model_User.findUnique({where: {email}})
    if(!user) throw ({code: "S002"})
    else if (!(await argon2.verify(user.password, password))) throw ({code: "S003"})

    const newToken = signToken({userId: user.id}, "1h")

    return successCreated("The user is now logged", {token: newToken})
  }catch(error:any){
    return errorHandler(error)
  }
}
