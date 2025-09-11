import { FlexBox } from "@/components/common";
import { Button, RangeInput } from "@/components/form";
import ColorInput from "@/components/form/ColorInput";
import Input from "@/components/form/Input";
import InputBox from "@/components/form/InputBox";
import Switch from "@/components/Switch";
import { Title } from "@/components/typhography";

export default function Home() {
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
          </form>

          <Button text="이미지 저장" />
          <Button text="초기화" design="cancel" />
        </div>
      </div>
    </FlexBox>
  );
}
