import { useState } from "react";
import { initialData, IStatData, maxStatlabelList } from "@/configs/initial";

export const useStatMaker = () => {
  const [maxStatIndex, setMaxStatIndex] = useState<number>(0);
  const [statData, setStatData] = useState<IStatData[]>(initialData);
  const [showStatBox, setShowStatBox] = useState<boolean>(true);

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
  };
};
