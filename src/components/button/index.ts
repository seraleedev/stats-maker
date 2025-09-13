import { ReactNode } from "react";

export interface ButtonProps {
  text?: string;
  design?: "cancel";
  onClick?: () => void;
  icon?: ReactNode;
  className?: string;
}

export const iconButtonStyle = `rounded-sm
text-white cursor-pointer 
flex justify-center items-center
active:bg-gray-800 hover:bg-gray-800
transition-all duration-300`;
