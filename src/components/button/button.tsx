"use client";

import { ButtonHubProps, ButtonProps } from "@/utils/types/component.types";
import { useRouter } from "next/navigation";
import { forwardRef, useState } from "react";
import { Text } from "../text/text";
import { IconMenuActive } from "../icons/icons";

const Button = forwardRef<HTMLButtonElement, ButtonProps & { type: string }>(
  ({ variant, type, children, ...props }, ref) => {
    return (
      <button ref={ref} type={type} className={`preset_button ${variant}`}>
        {children}
      </button>
    );
  }
);

const ButtonRedirect = forwardRef<
  HTMLButtonElement,
  ButtonProps & { redirectTo: string }
>(({ variant, redirectTo, children, ...props }, ref) => {
  const router = useRouter();

  const handleRedirect = () => {
    if (redirectTo) {
      router.push(redirectTo);
    }
  };

  return (
    <button
      ref={ref}
      onClick={() => handleRedirect()}
      className={`preset_button ${variant}`}
    >
      {children}
    </button>
  );
});

const ButtonHub = forwardRef<HTMLDivElement, ButtonHubProps>(({text, icon, expandedElements , ...props}, ref) => {

  const [deployOptions, setDeployOptions] = useState(false)

  const router = useRouter()

  return(
    <div ref={ref} className="preset_button_hub">
      <div className="content" onClick={() => setDeployOptions(!deployOptions)}>
        <button>
          <i className={icon}></i>
          <Text as="p" className="text">{text}</Text>
        </button>
        <IconMenuActive active={deployOptions}/>
      </div>
      <div className={`options_dropdown ${deployOptions ? "deployed" : "not_deployed"}`}>
        {expandedElements.map((element, index)=> {
          return <Text onClick={() => router.push(`/hub${element.redirectTo}`)} key={index} className="option" as="p">{element.expandText}</Text>
        })}
      </div>
    </div>
  )
})

export { Button, ButtonRedirect, ButtonHub };
