import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "@/utils/types/component.types";
import { useRouter } from "next/navigation";
import { forwardRef } from "react";

type TextProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C>;

type TextComponent = <C extends React.ElementType = "span">(
  props: TextProps<C>
) => React.ReactElement;

//@ts-expect-error -- Text crying null
export const Text: TextComponent = forwardRef(
  <C extends React.ElementType = "span">(
    { as, variant, redirect, blur,textColor,bold, pointer,className, ...props }: TextProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || "span"
    if(variant === "error"){
      console.log(props)
    }

    const router = useRouter()

    const handleRedirect = () => {
      router.push(`${redirect}`)
    }

    return <Component onClick={redirect ? handleRedirect : undefined} ref={ref} className={`preset_text ${variant} ${blur && "blur"} ${textColor}_text ${bold && "bold_text"} ${pointer && "pointer"} ${className}`} {...props} />;
  }
);
