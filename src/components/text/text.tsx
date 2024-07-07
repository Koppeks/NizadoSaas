import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "@/utils/types/component.types";
import { forwardRef } from "react";

type TextProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C>;

type TextComponent = <C extends React.ElementType = "span">(
  props: TextProps<C>
) => React.ReactElement | null;

//@ts-expect-error -- Text crying null
export const Text: TextComponent = forwardRef(
  <C extends React.ElementType = "span">(
    { as, variant, ...props }: TextProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || "span"
    if(variant === "error"){
      console.log(props)
    }
    return <Component ref={ref} className={`preset_text ${variant}`} {...props} />;
  }
);
