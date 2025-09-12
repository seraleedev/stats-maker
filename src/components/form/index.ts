import Input from "./Input";
import InputBox from "./InputBox";
import ColorInput from "./ColorInput";
import RangeInput from "./RangeInput";
import Button from "./Button";

export interface BaseInputProps {
  id?: string;
  value?: string | number;

}

export interface ButtonProps {
  text?: string;
  design?: "cancel";
  onClick?: () => void;
}

export const inputStyle = `border-2 block w-full p-2 text-md rounded-sm
        focus:ring-blue-600 focus:border-blue-600 focus:outline-none
          bg-gray-700 border-gray-700 
         text-white placeholder-gray-400 font-light`;

export { Input, InputBox, ColorInput, RangeInput, Button };
