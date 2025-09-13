"use client";
import { FlexBox } from "@/components/common";
import { RangeInput } from "@/components/form";
import BlockButton from "@/components/button/BlockButton";
import CounterInput from "@/components/form/CounterInput";
import ColorInput from "@/components/form/ColorInput";
import Input from "@/components/form/Input";
import InputBox from "@/components/form/InputBox";
import { Title } from "@/components/typhography";
import Graph from "@/components/graph/Graph";
import Footer from "@/components/Footer";
import { maxStatlabelList } from "@/configs/initial";
import StatBox from "@/components/form/StatBox";
import {
  RiArrowDownSFill,
  RiArrowUpSFill,
  RiDiceLine,
  RiDownloadFill,
  RiResetLeftLine,
} from "@remixicon/react";
import IconButton from "@/components/button/iconButton";
import { useStatMaker } from "../hook/useStatMaker";

export default function Home() {
  const {
    name,
    onChangeName,
    rgb,
    onChangeColor,
    maxStatIndex,
    setMaxStatIndex,
    statData,
    showStatBox,
    setShowStatBox,
    onChangeStat,
    onChangeLabel,
    resetStats,
    randomStats,
    colorPickerRef,
  } = useStatMaker();

  return (
    <FlexBox className="justify-center">
      <div className="bg-gray-900 px-[20px] pt-[40px] overflow-y-auto w-full min-h-lvh max-w-[400px]">
        <div className="w-full h-full relative">
          <Title text="STATS MAKER" />

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

            <FlexBox
              className={`justify-between w-full align-center text-white ${showStatBox ? "" : "mb-5"}`}
            >
              <label className=" font-medium">수치 설정</label>
              <IconButton
                icon={<RiArrowUpSFill />}
                toggle={!showStatBox}
                toggledIcon={<RiArrowDownSFill />}
                onClick={() => setShowStatBox(!showStatBox)}
              />
            </FlexBox>

            {showStatBox && (
              <>
                <BlockButton
                  text="무작위 수치"
                  icon={
                    <RiDiceLine className="transition-transform duration-300 group-hover:rotate-45 group-active:rotate-45" />
                  }
                  className="mb-5"
                  onClick={randomStats}
                />
                {statData.map((data, index) => (
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
              </>
            )}

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

          <BlockButton
            text="PNG로 저장"
            icon={
              <RiDownloadFill className="transition-transform duration-300 group-hover:translate-y-1 group-active:translate-y-1" />
            }
          />
          <BlockButton
            text="수치 초기화"
            design="cancel"
            onClick={resetStats}
            icon={
              <RiResetLeftLine className="transition-transform duration-800 group-hover:rotate-180 group-active:rotate-180" />
            }
          />

          <Footer />
        </div>
      </div>
    </FlexBox>
  );
}
