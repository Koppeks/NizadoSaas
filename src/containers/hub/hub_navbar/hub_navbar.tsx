"use client"

import { Iconic } from "@/components/iconic/iconic";
import { InputSearch } from "@/components/input/input";
import { Text } from "@/components/text/text";
import { requestSignOut } from "@/utils/api_requests/userForms";
import { usePathname, useRouter } from "next/navigation";
import { forwardRef } from "react";


export const HubNavbar = forwardRef<HTMLDivElement> (({...props}, ref) => {

  const pathname = usePathname()
  const router = useRouter()

  const handleSignOut = async () => {
    await requestSignOut().then(() => router.push("/sign-in")) 
  }

  return(
    <div className="container_hub_navbar">
      <i className="icon_hamburguer"></i>
      <Text className="pathname" as="p">Nizado<b>{pathname}</b></Text>
      <InputSearch />
      <div className="menu">
        <Iconic icon="icon_user"/>
        <Iconic icon="icon_signout" customFunction={() => handleSignOut()}/>
      </div>
    </div>
  )
})