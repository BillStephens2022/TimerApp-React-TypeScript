import { ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react";

type ContainerProps<T extends ElementType> = {
    as?: T;
    children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Container<C extends ElementType>({
    as, 
    children, 
    ...props
}: ContainerProps<C>) {
    const Component = as || "div";  // need to capitalize variable name so that React will recognize it as a component
  return <Component {...props}>{children}</Component>
  
}

