import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

const Container = <C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) => {
  const Component = as || "div";
  return (
    <Component
      className={`${
        as === "div" ? "bg-[#294a52] " : "bg-[#223338]"
      } p-20 rounded-md`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Container;
