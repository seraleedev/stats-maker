import { FlexBox } from "@/components/common";
import ColorInput from "@/components/form/ColorInput";
import Input from "@/components/form/Input";
import InputBox from "@/components/form/InputBox";
import Switch from "@/components/Switch";
import { Title } from "@/components/typhography";

export default function Home() {
  return (
    <FlexBox justify="center">
      <div
        className="bg-gray-900"
        style={{
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

          <form className="grid grid-cols-1 gap-2 mt-3">
            <InputBox
              labelName="이름"
              labelId="name"
              components={<Input type="text" id="name" />}
            />

            <InputBox
              labelName="색상"
              labelId="color"
              components={<ColorInput />}
            />
          </form>
        </div>
      </div>
    </FlexBox>
  );
}
