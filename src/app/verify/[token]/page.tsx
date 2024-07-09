"use client"

import { userVerification } from "@/utils/api_requests/authorizationToken"
import { useEffect } from "react"

export default function Verify({params} : {params: {token: string}}){

  useEffect(() => {
    const isTokenOk = userVerification(params.token)
    console.log(isTokenOk)
  },[])

  return(
    <div>
      <p>Verificar</p>
      <h1>{params.token}</h1>
    </div>
  )
}