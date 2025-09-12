// Hex코드 ,HSL 코드를 rgba 형식으로 변환
export function colorToRgba(color: string): number[] {
  // rgb case
  if (color.startsWith("rgb(")) {
    const rgb = color
      .replace(/rgb\(/, "")
      .replace(/\)/, "")
      .split(",")
      .map((v) => parseInt(v.trim(), 10));

    const [r, g, b] = rgb;
    return [r, g, b];
  }

  // Hex case
  if (color.startsWith("#")) {
    let hex = color.replace(/^#/, "");

    // #RGB → #RRGGBB
    if (hex.length === 3) {
      hex = hex
        .split("")
        .map((char) => char + char)
        .join("");
    }

    const num = parseInt(hex, 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;

    return [r, g, b];
  }

  // 2) HSL case
  if (color.startsWith("hsl")) {
    const hsl = color
      .replace(/hsla?\(/, "")
      .replace(/\)/, "")
      .split(",")
      .map((v) => v.trim());

    const h = parseFloat(hsl[0]); // Hue
    const s = parseFloat(hsl[1]) / 100; // Saturation
    const l = parseFloat(hsl[2]) / 100; // Lightness

    // HSL → RGB 변환
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;

    let r = 0,
      g = 0,
      b = 0;
    if (0 <= h && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (60 <= h && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (120 <= h && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (180 <= h && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (240 <= h && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (300 <= h && h < 360) {
      r = c;
      g = 0;
      b = x;
    }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return [r, g, b];
  }

  throw new Error("지원하지 않는 색상 형식입니다. (#hex, hsl, hsla만 지원)");
}

// rgb 배열을 스트링으로 변환
export const rgbToString = (rgb: number[]) => {
  return `${rgb.join(",")}`;
};
