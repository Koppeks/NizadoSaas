import { prisma } from "@/app/api/_Utils/Prisma";
import { successCreated } from "../../_Utils/SuccessHandling";
import {errorHandler} from "../../_Utils/ErrorHandling";
import { NextRequest, NextResponse } from "next/server";

import * as argon2 from "argon2"
import { decript } from "../../_Utils/Jwt";

export async function GET(request:NextRequest, response:NextResponse) {
  try {
    const token = request.cookies.get("token")
    console.log(request)

    if(!token) throw ({code: "S003", message: "Token not found"})

    // const validInfoToken = await decript(token)

    const users = await prisma.user.findMany();
    if (users.length > 0)
      return successCreated("Usuarios enviados correctamente", users)
    else
      return successCreated("No hay usuarios en la base de datos", {})
  } catch (error:any) {
    return errorHandler(error)
  }
}

// export async function PUT(request:Request) {
//   const {userId, editProperties} = await request.json()
//   try {
//     const authResult = await authMiddleware(request)
//     if(authResult instanceof NextResponse){
//       const validEditProperties = ["username", "avatar", "email", "password"]

//       const checkIfCorrectProperties = Object.keys(editProperties).reduce((acc, key) => {
//         if(validEditProperties.includes(key)) {
//           acc[key] = editProperties[key]
//         }
//         return acc
//       }, {} as Record<string, any>)
      
//       if(Object.keys(checkIfCorrectProperties).length == 0) throw ({code: "S004", message: "The edit properties are not correct"})

//       if(Object.keys(checkIfCorrectProperties).includes("password")){
//         checkIfCorrectProperties.password = await argon2.hash(checkIfCorrectProperties.password)
//       }

//       const updateUser = await prisma.user.update({
//         omit:{
//           password: true
//         },
//         where: {
//           id: userId
//         },
//         data: checkIfCorrectProperties
//       })
      
//       return successCreated("The user was updates" , updateUser)
//     }
//     throw authResult;
//   } catch (error:any) {
//     return errorHandler(error)
//   }
// }