"use client";
import { FlexBox } from "@/components/common";
import { RangeInput } from "@/components/form";
import BlockButton from "@/components/button/BlockButton";
import CounterInput from "@/components/form/CounterInput";
import ColorInput from "@/components/form/ColorInput";
import Input from "@/components/form/Input";
import InputBox from "@/components/form/InputBox";
import Switch from "@/components/Switch";
import { Title } from "@/components/typhography";
import Graph from "@/components/graph/Graph";
import Footer from "@/components/Footer";
import { useState, useRef } from "react";
import {
  initialColor,
  initialData,
  IStatData,
  maxStatlabelList,
} from "@/configs/initial";
import { colorToRgba } from "@/util/colorFn";
import StatBox from "@/components/form/StatBox";
import { RiArrowDownSFill, RiArrowUpSFill } from "@remixicon/react";
import IconButton from "@/components/button/iconButton";

export default function Home() {
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

  return (
    <FlexBox className="justify-center">
      <div className="bg-gray-900 px-[20px] pt-[40px] overflow-y-auto w-full min-h-lvh max-w-[400px]">
        <div className="w-full h-full relative">
          <Title text="STATS MAKER" />

          {/* <FlexBox className="mt-8 gap-3 justify-end">
            <Switch text="랜덤 수치" />
          </FlexBox> */}

          <form className="grid grid-cols-1 gap-2 mt-10">
            <InputBox
              labelName="이름"
              labelId="name"
              components={
                <Input
                  id="name"
                  value={name}
                  onChange={onChangeName}
                  placeholder="이름을 입력하세요."
                />
              }
            />

            <InputBox
              labelName="최대 수치"
              labelId="maxStat"
              components={
                <RangeInput
                  id="maxStat"
                  labelList={maxStatlabelList}
                  value={maxStatIndex}
                  setState={setMaxStatIndex}
                />
              }
            />
            <FlexBox className="justify-between w-full align-center mb-5 text-white">
              <label className=" font-medium">수치 설정</label>
              <IconButton
                icon={<RiArrowUpSFill />}
                toggle={!showStatBox}
                toggledIcon={<RiArrowDownSFill />}
                onClick={() => setShowStatBox(!showStatBox)}
              />
            </FlexBox>
            {showStatBox &&
              statData.map((data, index) => (
                <StatBox
                  className="mb-5"
                  key={`stat-${index}`}
                  components={
                    <>
                      <Input
                        onChange={(e) => onChangeLabel(e.target.value, index)}
                        value={data.label}
                        placeholder={data.label}
                      />
                      <CounterInput
                        index={index}
                        className="max-w-32"
                        id={`data-label-${index}`}
                        value={data.stat}
                        onChangeStat={onChangeStat}
                        min={1}
                        max={maxStatlabelList[maxStatIndex]}
                      />
                    </>
                  }
                />
              ))}

            <InputBox
              labelName="그래프 색상"
              labelId="color"
              components={
                <ColorInput
                  ref={colorPickerRef}
                  onChange={onChangeColor}
                  id="color"
                />
              }
            />
          </form>

          <Graph
            name={name}
            maxStat={maxStatlabelList[maxStatIndex]}
            statDatas={statData}
            chartColor={rgb}
          />
          <BlockButton text="PNG로 저장" />
          <BlockButton text="초기화" design="cancel" />

          <Footer />
        </div>
      </div>
    </FlexBox>
  );
}
