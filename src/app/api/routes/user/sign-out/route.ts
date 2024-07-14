import { errorHandler} from "@/app/api/_Utils/ErrorHandling"
import { successRequest } from "@/app/api/_Utils/SuccessHandling"
import { cookies } from "next/headers";


export async function GET() {
  try{
    cookies().delete("token")
    return successRequest("The user sign out", {})
  }catch(error:any){
    return errorHandler(error)
  }
}
