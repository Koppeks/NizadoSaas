"use client"

import { verifyTokenService } from "@/app/(Utils)/ApiService"
import { useEffect } from "react"

export default function Verify({params} : {params: {token: string}}){

  useEffect(() => {
    const isTokenOk = verifyTokenService(params.token)
    console.log(isTokenOk)
  },[])

  return(
    <div>
      <p>Verificar</p>
      <h1>{params.token}</h1>
    </div>
  )
}