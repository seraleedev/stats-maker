"use client";
import { FlexBox } from "@/components/common";
import { Button, RangeInput } from "@/components/form";
import CounterInput from "@/components/form/CounterInput";
import ColorInput from "@/components/form/ColorInput";
import Input from "@/components/form/Input";
import InputBox from "@/components/form/InputBox";
import Switch from "@/components/Switch";
import { Title } from "@/components/typhography";
import Graph from "@/components/graph/Graph";
import Footer from "@/components/Footer";
import { useState, useRef } from "react";
import { initialColor, initialData, IStatData } from "@/configs/initial";
import { colorToRgba } from "@/util/colorFn";

export default function Home() {
  const colorPickerRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState<string>("");
  const [rgb, setRgb] = useState<number[]>(initialColor);
  const [maxStat, setMaxStat] = useState<number>(5);
  const [statData, setStatData] = useState<IStatData[]>(initialData);

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
  console.log(rgb);

  return (
    <FlexBox className="justify-center">
      <div className="bg-gray-900 px-[20px] pt-[40px] overflow-y-auto w-full min-h-lvh max-w-[400px]">
        <div className="w-full h-full relative">
          <Title text="STATS MAKER" />

          <FlexBox className="mt-8 gap-3 justify-end">
            <Switch text="랜덤 수치" />
          </FlexBox>

          <form className="grid grid-cols-1 gap-2 mt-3">
            <InputBox
              labelName="이름"
              labelId="name"
              components={
                <Input id="name" value={name} onChange={onChangeName} />
              }
            />

            <InputBox
              labelName="그래프 색상"
              labelId="color"
              components={
                <ColorInput ref={colorPickerRef} onChange={onChangeColor} />
              }
            />
            <InputBox
              labelName="최대 수치"
              labelId="maxStat"
              components={<CounterInput id="maxStat" />}
            />
            <InputBox
              labelName="수치1"
              labelId="stat1"
              components={<RangeInput />}
            />
          </form>

          <Graph
            name={name}
            maxStat={10}
            statDatas={[{ label: "수치1", stat: 5 }]}
            chartColor={rgb}
          />
          <Button text="PNG로 저장" />
          <Button text="초기화" design="cancel" />

          <Footer />
        </div>
      </div>
    </FlexBox>
  );
}
