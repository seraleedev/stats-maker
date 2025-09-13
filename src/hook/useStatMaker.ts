"use client";
import { useState, useRef } from "react";
import {
  initialColor,
  initialData,
  IStatData,
  maxStatlabelList,
} from "@/configs/initial";
import { colorToRgba } from "@/util/colorFn";

export const useStatMaker = () => {
  const colorPickerRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState<string>("");
  const [rgb, setRgb] = useState<number[]>(initialColor);
  const [maxStatIndex, setMaxStatIndex] = useState<number>(0);
  const [statData, setStatData] = useState<IStatData[]>(initialData);
  const [showStatBox, setShowStatBox] = useState<boolean>(true);

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

  const onChangeStat = (value: number, index: number) => {
    const newDataList = statData.map((item, i) => {
      if (i === index) {
        return { ...item, stat: value };
      }
      return item;
    });
    setStatData(newDataList);
  };

  const onChangeLabel = (value: string, index: number) => {
    const newDataList = statData.map((item, i) => {
      if (i === index) {
        return { ...item, label: value };
      }
      return item;
    });
    setStatData(newDataList);
  };

  const resetStats = () => {
    const resetStatList = statData.map((item) => {
      return { ...item, stat: 1 };
    });
    setStatData(resetStatList);
  };

  const randomStats = () => {
    const randomStatList = statData.map((item) => {
      return {
        ...item,
        stat: Math.floor(Math.random() * maxStatlabelList[maxStatIndex]) + 1,
      };
    });
    setStatData(randomStatList);
  };

  return {
    name,
    setName,
    onChangeName,
    rgb,
    setRgb,
    onChangeColor,
    maxStatIndex,
    setMaxStatIndex,
    statData,
    setStatData,
    showStatBox,
    setShowStatBox,
    onChangeStat,
    onChangeLabel,
    resetStats,
    randomStats,
    colorPickerRef,
  };
};
