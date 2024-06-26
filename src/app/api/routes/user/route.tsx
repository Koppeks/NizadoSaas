import { prisma } from "@/app/api/_Utils/Prisma";
import { successCreated } from "../../_Utils/SuccessHandling";
import { contentWasNotFoundError, internalServerError, missingParametersError, recordUpdatePrismaError, userUnautorizedError, wrongParametersError } from "../../_Utils/ErrorHandling";
import { authMiddleware } from "../../_Middleware/Auth";
import { NextResponse } from "next/server";

import * as argon2 from "argon2"

export async function GET() {
  try {
    const users = await prisma.model_User.findMany();

    if (users.length > 0)
      return new Response(JSON.stringify(users), {
        status: 200,
        headers: {
          "content-type": "application/json",
        },
      });
    else
      return new Response(JSON.stringify([]), {
        status: 200,
        headers: {
          "content-type": "application/json",
        },
      });
  } catch (error) {
    return new Response(JSON.stringify({ errorStatus: error }), {
      status: 500,
      headers: {
        "content-type": "application/json",
      },
    });
  }
}

export async function PUT(request:Request) {
  const {userId, editProperties} = await request.json()
  try {
    const authResult = authMiddleware(request)
    if(authResult instanceof NextResponse){
      if(authResult.status === 400){
          const response = await authResult.text()
          const body = JSON.parse(response)
          if(body.code == "S003") throw({code: body.code})
          else if(body.code == "S002") throw({code: body.code})
      }

      const validEditProperties = ["username", "avatar", "email", "password"]

      const checkIfCorrectProperties = Object.keys(editProperties).reduce((acc, key) => {
        if(validEditProperties.includes(key)) {
          acc[key] = editProperties[key]
        }
        return acc
      }, {} as Record<string, any>)
      
      if(Object.keys(checkIfCorrectProperties).length == 0) throw ({code: "S004"})

      if(Object.keys(checkIfCorrectProperties).includes("password")){
        checkIfCorrectProperties.password = await argon2.hash(checkIfCorrectProperties.password)
      }

      const updateUser = await prisma.model_User.update({
        omit:{
          password: true
        },
        where: {
          id: userId
        },
        data: checkIfCorrectProperties
      })

      if(!updateUser) throw ({code: "S001"})
      return successCreated("The user was updates" , updateUser)
    }
  } catch (error:any) {
    if(error.code == "S001") return contentWasNotFoundError("User was not found")
    if(error.code == "S002") return userUnautorizedError("User is not authorized")
    if(error.code == "S003") return missingParametersError("The token cannot be null")
    if(error.code == "S004") return wrongParametersError("The parameters for editing the user are wrong")
    if(error.code == "P2025") return recordUpdatePrismaError("The user was not found", error)
    return internalServerError("Internal errror server", error)
  }
}