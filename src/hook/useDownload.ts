import { useRef } from "react";
import { saveAs } from "file-saver";
import { Chart } from "chart.js";

export const useDownload = () => {
  const graphRef = useRef<Chart<"radar"> | null>(null);

  const onClickDownload = async (target: Chart<"radar"> | null) => {
    if (!target) return;

    try {
      if (typeof target.toBase64Image !== "function") {
        console.error("유효한 Chart.js 인스턴스가 아닙니다.");
        alert("이미지를 저장할 수 없습니다.");
        return;
      }

      const base64Image = target.toBase64Image();
      const response = await fetch(base64Image);
      const blob = await response.blob();

      saveAs(blob, "stats.png");
    } catch (error) {
      console.log(error);
      alert("이미지를 저장에 실패했습니다.");
    }
  };

  return { graphRef, onClickDownload };
};
