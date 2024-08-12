"use client"

import { FormFooter } from "@/containers/form_footer/form_footer";
import { NizadoLogo } from "@/components/nizado_logo/nizado_logo";
import { Text } from "@/components/text/text";
import { FormSignUp } from "@/containers/form_sign_up/form_sign_up";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import useStore from "@/redux/UseStore";

export default function SignUp() {

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
    <main className="Main_Form_Container">
      <div className="left_main_form">
        <NizadoLogo/>
      </div>
      <div className="right_main_form">
        <Text as="h2">Sign up</Text>
        <FormSignUp/>
        <FormFooter actualEndpoint="sign-up"/>
      </div>
    </main>
  )
}