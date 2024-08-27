"use client";

import { forwardRef } from "react";
import { ButtonRedirect } from "../../components/button/button";
import { Iconic } from "../../components/iconic/iconic";
import { NizadoLogo } from "../../components/nizado_logo/nizado_logo";
import { ExpandMenu } from "@/components/expand_menu/expand_menu";
import { requestSignOut } from "@/utils/api_requests/userForms";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import useStore from "@/redux/UseStore";
import { Text } from "@/components/text/text";
import { fetcher } from "@/libs/fetcher";

export const Navbar = forwardRef<HTMLDivElement>(({}, ref) => {
  
  const {data, error, isLoading} = useSWR("http://localhost:3000/api/routes/user", fetcher)
  const router = useRouter();

  const {resetStore} = useStore()
  
  const handleSignOut = async () => {
    await requestSignOut()
    resetStore()
    router.push("/sign-in")
  }

  // Rendered issues if is not at the end
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
      {
        isLoading ? <></> : <div className="left_nav">
        {data.success ? (
          <>
            <Iconic icon="icon_user" redirectTo="/hub" />
            <Iconic icon="icon_bell"/>
            <Iconic
              icon="icon_signout"
              customFunction={handleSignOut}
            />
          </>
        ) : (
          <>
            <ButtonRedirect redirectTo="/sign-up" variant="primary" type="button">
              <Text as="p">Try free</Text>
            </ButtonRedirect>
            <Iconic redirectTo="/sign-in" text="Sign in" icon="icon_user" />
            <Iconic icon="icon_gear" />
          </>
        )}
      </div>
      }
    </div>
  );
});
