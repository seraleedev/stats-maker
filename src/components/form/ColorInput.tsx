import { BaseInputProps } from ".";

interface ColorInputProps extends BaseInputProps {
  onChange?: () => void;
}

const ColorInput = ({ id, value, onChange }: ColorInputProps) => {
  return (
    <div
      className={`
         cursor-pointer
        block w-full p-2
       rounded-sm border-2
     focus-within:ring-blue-600 focus-within:border-blue-600 focus-visible:outline-2
       bg-gray-700 border-gray-700 
       
      `}
    >
      <div
        className={`relative w-full h-[30px]
        rounded-sm overflow-hidden
        `}
      >
        <input
          type="color"
          id={id}
          value={value}
          onChange={onChange}
          className={`absolute
            w-[110%] h-[60px]
            -left-[10px] -top-[10px]
         cursor-pointer
       `}
        />
      </div>
    </div>
  );
};

export default ColorInput;
