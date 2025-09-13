import { useState, useRef } from "react";
import { initialColor } from "@/configs/initial";
import { colorToRgba } from "@/util/colorFn";

export const useInput = () => {
  const colorPickerRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState<string>("");
  const [rgb, setRgb] = useState<number[]>(initialColor);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangeColor = () => {
    const color = colorPickerRef.current?.value;
    if (color) {
      const value = colorToRgba(color);
      setRgb(value);
    }
  };

  return {
    colorPickerRef,
    name,
    setName,
    onChangeName,
    onChangeColor,
    rgb,
    setRgb,
  };
};
