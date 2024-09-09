import React, { ReactNode } from "react";
import ButtonComponent from "./ButtonComponent";

interface ProgramCardComponentProps {
  icon: ReactNode;
  text: string;
}

const ProgramCardComponent: React.FC<ProgramCardComponentProps> = ({
  icon,
  text,
}) => {
  return (
    <div className="w-[194px] h-[266px] px-[28px] py-[34px] flex flex-col items-center gap-[46px] bg-glassColor rounded-[30px]">
      <span>{icon}</span>

      <p className="text-[12px] font-[900] leading-[15px] text-center bg-clip-text text-transparent bg-gradient-to-r from-thirdBlue  to-secondary">
        {text}
      </p>

      <ButtonComponent
        text="შეიტყვეთ მეტი"
        textSize="10px"
        bg="linear-gradient(to right, #2662d6, #002241)"
        txtColor="white"
      />
    </div>
  );
};

export default ProgramCardComponent;
