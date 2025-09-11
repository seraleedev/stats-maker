import Input from "./Input";
import InputBox from "./InputBox";
import ColorInput from "./ColorInput";
import RangeInput from "./RangeInput";
import Button from "./Button";

export interface BaseInputProps {
  id?: string;
  value?: string;
  onChange?: () => void;
}

export interface ButtonProps {
  text?: string;
  design?: "cancel";
  onClick?: () => void;
}

export { Input, InputBox, ColorInput, RangeInput, Button };
