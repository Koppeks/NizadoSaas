"use client"

import { useEffect, useRef } from "react"

export default function TokenValidation({children}: {children: React.ReactNode}) {

  const iterationRef = useRef(false)
  
  useEffect(() => {
    if(iterationRef.current){
      console.log("token validation component in layout")

      //Cookies aca
      

    }

    return () => {iterationRef.current = true}
  })


  return <>{children}</>
}