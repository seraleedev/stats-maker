import { FlexBox } from "@/components/common";
import { RangeInput } from "@/components/form";
import ColorInput from "@/components/form/ColorInput";
import Input from "@/components/form/Input";
import InputBox from "@/components/form/InputBox";
import Switch from "@/components/Switch";
import { Title } from "@/components/typhography";

export default function Home() {
  return (
    <FlexBox className="justify-center">
      <div
        className="bg-gray-900"
        style={{
          width: "100%",
          maxWidth: 400,
          height: "100vh",
          padding: "40px 20px",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Title text="STATS MAKER" />

          <FlexBox className="mt-8 gap-3 justify-end">
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
            <InputBox
              labelName="최대 수치"
              labelId="maxStat"
              components={<Input type="number" id="maxStat" />}
            />
            <InputBox
              labelName="수치1"
              labelId="stat1"
              components={<RangeInput />}
            />
            <InputBox
              labelName="수치2"
              labelId="stat2"
              components={<Input type="number" id="name" />}
            />
            <InputBox
              labelName="수치3"
              labelId="stat3"
              components={<Input type="number" id="name" />}
            />
            <InputBox
              labelName="수치4"
              labelId="stat4"
              components={<Input type="number" id="name" />}
            />
            <InputBox
              labelName="수치5"
              labelId="stat5"
              components={<Input type="number" id="name" />}
            />
            <InputBox
              labelName="수치6"
              labelId="stat6"
              components={<Input type="number" id="name" />}
            />
          </form>

          <button>이미지 저장</button>
          <button>초기화</button>
        </div>
      </div>
    </FlexBox>
  );
}
