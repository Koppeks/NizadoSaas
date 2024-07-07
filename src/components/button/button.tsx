"use client";

import { ButtonProps } from "@/utils/types/component.types";
import { useRouter } from "next/navigation";
import { forwardRef } from "react";

const Button = forwardRef<HTMLButtonElement, ButtonProps & { type: string }>(
  ({ variant, type, children }, ref) => {
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
>(({ variant, redirectTo, children }, ref) => {
  const router = useRouter();

  const handleRedirect = () => {
    if (redirectTo) router.push(redirectTo);
    console.log("Nel");
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

export { Button, ButtonRedirect };
