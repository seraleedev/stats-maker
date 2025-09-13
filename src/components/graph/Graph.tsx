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
import theme from "@/configs/theme";
import { rgbToString } from "@/util/colorFn";

interface GraphProps {
  name?: string;
  maxStat: number;
  statDatas: { label: string; stat: number }[];
  chartColor: number[];
}
const Graph = ({ name, maxStat, statDatas, chartColor }: GraphProps) => {
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    ChartDataLabels
  );
  const color = rgbToString(chartColor);
  const stringLabels = statDatas.map((data) => `${data.label} ${data.stat}`);
  const dataStats = statDatas.map((data) => data.stat);

  const data = {
    labels: stringLabels,
    datasets: [
      {
        label: "",
        data: dataStats,
        backgroundColor: `rgba(${color},0.2)`,
        borderColor: `rgba(${color},1)`,
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
        display: false,
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
        max: maxStat,
        angleLines: {
          color: "#e5e7eb", // 각도 라인 색, gray-300
        },
        grid: {
          color: maxStat < 100 ? "#e5e7eb" : "transparent", // 그리드 색, gray-300
        },
        ticks: {
          display: false,
          stepSize: 1,
        },
        pointLabels: {
          color: theme.colors.black, // 레이블 색상
          font: {
            size: 16,
          },
          callback: (label: any) => {
            const [text, number] = label.split(" ");
            return [text, number];
          },
        },
      },
    },
  };
  return (
    <div className="mb-5">
      <h2 className="text-white text-center font-dnf text-2xl mb-3 mt-3">
        {name || "익명"}의 스탯
      </h2>
      <div className="w-full p-2 bg-white rounded-sm">
        <Radar data={data} options={options} />
      </div>
    </div>
  );
};

export default Graph;
