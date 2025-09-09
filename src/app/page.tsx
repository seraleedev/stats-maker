import { FlexBox } from "@/components/common";
import Switch from "@/components/Switch";
import { Title } from "@/components/typhography";
import theme from "@/configs/theme";

export default function Home() {
  return (
    <FlexBox justify="center">
      <div
        style={{
          background: theme.colors.darkGray,
          width: "100%",
          maxWidth: 400,
          height: "100vh",
          padding: "40px 20px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Title text="STATS MAKER" />

          <FlexBox className="mt-8 gap-3" justify="end">
            <Switch text="랜덤 속성" />
            <Switch text="랜덤 수치" />
          </FlexBox>
        </div>
      </div>
    </FlexBox>
  );
}
