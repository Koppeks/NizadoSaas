"use client"

import { NavbarProps } from "@/utils/types/component.types";
import { forwardRef } from "react";
import { ButtonRedirect} from "../../components/button/button";
import { Iconic } from "../../components/iconic/iconic";
import { NizadoLogo } from "../../components/nizado_logo/nizado_logo";
import { ExpandMenu } from "@/components/expand_menu/expand_menu";
import useStore from "@/redux/UseStore";



export const Navbar = forwardRef<HTMLElement, NavbarProps> (({userLoged}, ref) => {

  const {removeToken} = useStore()

  return(
    <div className="container_navbar">
      <NizadoLogo/>
      <nav className="center_menu">
        <ul>
          <ExpandMenu menuTitle="Product" aligned="left" elements={[
            {text: "Calendar", href: "direction"},
            {text: "Event managment", href: "direction"},
            {text: "Daylis", href: "direction"},
            ]} />
          <ExpandMenu menuTitle="About us" aligned="center" elements={[
            {text: "Our team", href: "direction"},
            {text: "Check out the news", href: "direction"},
            {text: "Blog", href: "direction"},
            {text: "Terms & Conditions", href: "direction"},
            ]} />
          <ExpandMenu menuTitle="Pricing" aligned="center" elements={[
            {text: "Check our plans", href: "direction"},
            {text: "Buy from us", href: "direction"},
            {text: "Watch the demo", href: "direction"}
            ]} />
          <ExpandMenu menuTitle="Support" aligned="right" elements={[
            {text: "Talk to us", href: "direction"},
            {text: "Give feedback", href: "direction"}
            ]} />
        </ul>
      </nav>

      <div className="left_nav">
        {
        userLoged ? 
          <>
            <Iconic icon="icon_user"/>
            <Iconic icon="icon_bell"/>
            <Iconic icon="icon_signout" handler={()=> removeToken()}/>
          </>
          :
          <>
            <ButtonRedirect redirectTo="/sign-up" variant="primary">Try free</ButtonRedirect>
            <Iconic redirectTo="/sign-in" text="Sign in" icon="icon_user"/>
            <Iconic icon="icon_gear"/>
          </>
        
        }
      </div>

    </div>
  )

})