import { BaseInputProps } from ".";

interface InputProps extends BaseInputProps {
  type: "text" | "number";
  placeholder?: string;
}

const Input = ({ type, id, value, placeholder, onChange }: InputProps) => {
  return (
    <input
      autoComplete="off"
      type={type}
      id={id}
      className={`border-2 block w-full p-2 text-md rounded-sm
        focus:ring-blue-600 focus:border-blue-600 focus:outline-none
          bg-gray-700 border-gray-700 
         text-white placeholder-gray-400 font-light`}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      min={type == "number" ? 1 : undefined}
      max={type == "number" ? 10 : undefined}
      step={type == "number" ? 1 : undefined}
    />
  );
};

export default Input;
