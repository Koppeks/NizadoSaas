import { templateVerifyEmail } from "@/app/api/_Html_Templates/verifyEmail";
import { contentWasNotFoundError, internalServerError, missingParametersError, redundantError } from "@/app/api/_Utils/ErrorHandling";
import { transporter } from "@/app/api/_Utils/NodeMailer";
import { prisma } from "@/app/api/_Utils/Prisma";
import { successTest } from "@/app/api/_Utils/SuccessHandling";

const nodemailerEmail = process.env.NODEMAILER_EMAIL as string


export async function GET(request:Request) {
  //Recibir la verificacion
}

export async function POST(request:Request) {
  //Pedir la vefiricacion
  const {email} = await request.json()
  try {
    if(!email) throw ({code: "S003"})
    const user = await prisma.model_User.findUnique({omit: {password: true},where:{email}})
    if(!user) throw ({code: "S001"})
    if(user.verified) throw ({code: "S005"})

      await transporter.sendMail({
        from: nodemailerEmail,
        to: email,
        subject: "DALEE BOOO",
        text: "This is DALE BOOOCAAAA",
        html: templateVerifyEmail
      })

    return successTest("Success")
  } catch (error:any) {
    console.log(error)
    if(error.code == "S001") return contentWasNotFoundError("User was not found")
    if(error.code == "S003") return missingParametersError("The email cannot be null")
    if(error.code == "S005") return redundantError("The user is already verified")
    return internalServerError("Error asking for verify", error)
  }
}
