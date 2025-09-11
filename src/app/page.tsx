"use client";
import { FlexBox } from "@/components/common";
import { Button, RangeInput } from "@/components/form";
import CounterInput from "@/components/form/CounterInput";
import ColorInput from "@/components/form/ColorInput";
import Input from "@/components/form/Input";
import InputBox from "@/components/form/InputBox";
import Switch from "@/components/Switch";
import { Title } from "@/components/typhography";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

export default function Home() {
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    ChartDataLabels
  );

  const data = {
    labels: ["Thing 1", "Thing 2", "Thing 3", "Thing 4", "Thing 5", "Thing 6"],
    datasets: [
      {
        label: "",
        data: [4, 2, 4, 2, 4, 2],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    elements: {
      point: {
        radius: 0,
        hoverRadius: 0,
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      datalabels: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      r: {
        min: 1,
        max: 5,
        angleLines: {
          color: "#ccc", // 각도 라인 색
        },
        grid: {
          color: "#eee", // 방사형 그리드 색
        },
        ticks: {
          display: false,
          stepSize: 1,
        },
        pointLabels: {
          color: "#000", // 레이블 색상
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <FlexBox className="justify-center">
      <div className="bg-gray-900 px-[20px] py-[40px] overflow-y-auto w-full min-h-lvh max-w-[400px]">
        <div className="w-full h-full relative">
          <Title text="STATS MAKER" />

          <FlexBox className="mt-8 gap-3 justify-end">
            <Switch text="랜덤 속성" />
            <Switch text="랜덤 수치" />
          </FlexBox>

          <form className="grid grid-cols-1 gap-2 mt-3">
            <InputBox
              labelName="이름"
              labelId="name"
              components={<Input id="name" />}
            />

            <InputBox
              labelName="색상"
              labelId="color"
              components={<ColorInput />}
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
          <h2 className="text-white">홍길동의 스탯</h2>
          <div className="w-full bg-white mb-5">
            <Radar data={data} options={options} />
          </div>

          <Button text="이미지 저장" />
          <Button text="초기화" design="cancel" />
        </div>
      </div>
    </FlexBox>
  );
}
