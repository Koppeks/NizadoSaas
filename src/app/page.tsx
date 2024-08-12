"use client"

import { Navbar } from "@/containers/navbar/navbar";
import "../sass/pages/home.scss"
import { useEffect, useRef } from "react";
import useStore from "@/redux/UseStore";
import { useSearchParams } from "next/navigation";

export default function Home() {


  //Check token validation
  const queryParams = useSearchParams()
  const expired = queryParams.get("expired")

  const iterateUseEffect = useRef(false)

  useEffect(()=> {
    if(iterateUseEffect.current){
      console.log("useEffect home")
      if(expired) useStore.persist.clearStorage()
    }
    return () => {iterateUseEffect.current = true}
  })
  //Check token validation

  return (
    <main className="Home_Container">
      <Navbar/>
    </main>
  );
}
