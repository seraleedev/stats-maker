import Input from "./Input";
import InputBox from "./InputBox";
import ColorInput from "./ColorInput";
import RangeInput from "./RangeInput";

export interface BaseInputProps {
  id?: string;
  value?: string;
  onChange?: () => void;
}

export { Input, InputBox, ColorInput, RangeInput };
