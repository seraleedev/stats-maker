import { CSSProperties } from "react";

interface IFlexBox {
  children?: React.ReactNode;
  direction?: string;
  justify?: string;
  align?: string;
  className?: string;
  style?: CSSProperties;
}
export const FlexBox = ({
  children,
  direction = "row",
  justify = "start",
  align = "center",
  className = "",
  style,
}: IFlexBox) => {
  return (
    <div
      className={`flex flex-${direction} justify-${justify} items-${align} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};
