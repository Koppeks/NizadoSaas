"use client";

import { forwardRef, useEffect, useRef, useState } from "react";
import { ButtonRedirect } from "../../components/button/button";
import { Iconic } from "../../components/iconic/iconic";
import { NizadoLogo } from "../../components/nizado_logo/nizado_logo";
import { ExpandMenu } from "@/components/expand_menu/expand_menu";
import useStore from "@/redux/UseStore";
import { requestSignOut } from "@/utils/api_requests/userForms";
import { useRouter } from "next/navigation";

export const Navbar = forwardRef<HTMLDivElement>(
  ({}, ref) => {
    
    const user = useStore.getState().user

    const [userLog, setUserLog] = useState({} || null)
    const [isLoading, setIsLoading] = useState(true)

    const router = useRouter()

    useEffect(()=> {
      setUserLog(user)
      console.log(user)
      setIsLoading(false)
    },[user])

    if (isLoading) {
      return null; // Devuelve null mientras se verifica el estado del token
    }

    return (
      <div ref={ref} className="container_navbar">
        <NizadoLogo />
        <nav className="center_menu">
          <ul>
            <ExpandMenu
              menuTitle="Product"
              aligned="left"
              elements={[
                { text: "Calendar", href: "direction" },
                { text: "Event managment", href: "direction" },
                { text: "Daylis", href: "direction" },
                { text: "Watch the demo", href: "direction" },
              ]}
            />
            <ExpandMenu
              menuTitle="About us"
              aligned="center"
              elements={[
                { text: "Our team", href: "direction" },
                { text: "Check out the news", href: "direction" },
                { text: "Blog", href: "direction" },
                { text: "Terms & Conditions", href: "direction" },
              ]}
            />
            <ExpandMenu
              menuTitle="Pricing"
              aligned="center"
              elements={[
                { text: "Check our plans", href: "direction" },
                { text: "Buy from us", href: "direction" },
              ]}
            />
            <ExpandMenu
              menuTitle="Support"
              aligned="right"
              elements={[
                { text: "Talk to us", href: "direction" },
                { text: "Give feedback", href: "direction" },
              ]}
            />
          </ul>
        </nav>
        <div className="left_nav">
          {userLog ? (
            <>
              <Iconic icon="icon_user" redirectTo="/hub" />
              <Iconic icon="icon_bell" />
              <Iconic icon="icon_signout" customFunction={async ()=> await requestSignOut().then(() => router.push("/sign-in"))}/>
            </>
          ) : (
            <>
              <ButtonRedirect redirectTo="/sign-up" variant="primary">
                Try free
              </ButtonRedirect>
              <Iconic redirectTo="/sign-in" text="Sign in" icon="icon_user" />
              <Iconic icon="icon_gear" />
            </>
          )}
        </div>
      </div>
    );
  }
);
