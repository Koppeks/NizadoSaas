import React, { ComponentProps } from "react"

export type ButtonProps = ComponentProps<"button"> & {
  variant: "primary" | "secondary" | "tertiary" | "quaternary",
  children: string
}

export type ButtonHubProps = ComponentProps<"div"> & {
  text: string,
  icon: string,
  expandedElements: {
    expandText: string,
    redirectTo: string
  }[]
}

// Text dynamic types
export type PropsOf<
  C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<unknown>
> = JSX.LibraryManagedAttributes<C, React.ComponentPropsWithoutRef<C>>

type AsProp<C extends React.ElementType> = {
  as?: C,
  variant?: "error" | "small"
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


export type IconicProps = {
  text? : string,
  redirectTo?: string,
  customFunction?: () => void,
  icon : "icon_user" | "icon_gear" | "icon_bell" | "icon_signout" | "icon_home" | "icon_calendar"
}


export type ExpandMenuProps = {
  menuTitle: string,
  aligned: "left"| "center" | "right",
  elements: {
    text: string,
    href: string
  }[]
}

export type FormFooterProps = {
  actualEndpoint : "sign-in" | "sign-up" | "forgot-password"
}