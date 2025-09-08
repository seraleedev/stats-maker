import { FlexBox } from "@/components/common";
import { Title } from "@/components/typhography";
import theme from "@/configs/theme";

export default function Home() {
  return (
    <FlexBox justify="center" align="center">
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
            background: "#ccc",
          }}
        >
          <Title text="STATS MAKER" />
          <p className="text-lg">가나다라마바사</p>
        </div>
      </div>
    </FlexBox>
  );
}
