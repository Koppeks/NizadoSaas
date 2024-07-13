"use client"

import { Iconic } from "@/components/iconic/iconic";
import { InputSearch } from "@/components/input/input";
import { Text } from "@/components/text/text";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";


export const HubNavbar = forwardRef<HTMLDivElement> (({...props}, ref) => {

  const pathname = usePathname()

  console.log(pathname)

  return(
    <div className="container_hub_navbar">
      <i className="icon_hamburguer"></i>
      <Text className="pathname" as="p">Nizado<b>{pathname}</b></Text>
      <InputSearch />
      <div className="menu">
        <Iconic icon="icon_user"/>
        <Iconic icon="icon_gear"/>
      </div>
    </div>
  )
})