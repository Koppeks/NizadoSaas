import { ComponentProps } from "react"

export type ButtonProps = ComponentProps<"button"> & {
  variant: "primary" | "secondary" | "tertiary",
  children: string
}

// Text dynamic types
export type PropsOf<
  C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<unknown>
> = JSX.LibraryManagedAttributes<C, React.ComponentPropsWithoutRef<C>>

type AsProp<C extends React.ElementType> = {
  as?: C
}

export type ExtendableProps<
  ExtendedProps = {},
  OverrideProps = {}
> = OverrideProps & Omit<ExtendedProps, keyof OverrideProps>

export type InheritableElementProps <
  C extends React.ElementType,
  Props = {}
> = ExtendableProps<PropsOf<C>, Props>

export type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = {}
> = InheritableElementProps<C, Props & AsProp<C>>

export type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>["ref"]

export type PolymorphicComponentPropsWithRef<
  C extends React.ElementType, 
  Props = {}
> = PolymorphicComponentProps<C, Props> & { ref? : PolymorphicRef<C> }

// Text dynamic types end


export type InputProps = ComponentProps<"input"> & {
  type: string,
  label?: string
}