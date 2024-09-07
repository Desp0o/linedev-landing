import React from "react";

interface ButtonComponentProps {
  bg?: string;
  border?: boolean;
  txtColor?: string;
  btnWidth?: string;
  btnHeight?: string;
  text: string;
  borderColor?:string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  bg,
  border,
  txtColor,
  btnHeight,
  text,
  borderColor
}) => {
  return (
    <button
      className="flex items-center justify-center px-[28px] py-[12px] rounded-[30px]"
      style={{
        backgroundColor: bg ? bg : "unset",
        border: border ? `1px solid ${borderColor}` : "unset",
        color: txtColor,
        height: btnHeight,
      }}
    >
      <p className="text-[14px] leading-[18px] font-[900]">{text}</p>
    </button>
  );
};

export default ButtonComponent;
