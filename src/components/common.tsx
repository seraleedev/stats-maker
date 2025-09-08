interface IFlexBox {
  children?: React.ReactNode;
  direction?: string;
  justify?: string;
  align?: string;
  gap?: string;
  className?: string;
}
export const FlexBox = ({
  children,
  direction = "row",
  justify = "start",
  align = "stretch",
  gap = "0",
  className = "",
}: IFlexBox) => {
  return (
    <div
      className={`flex flex-${direction} justify-${justify} items-${align} gap-${gap} ${className}`}
    >
      {children}
    </div>
  );
};

