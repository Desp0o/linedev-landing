import React from "react";

interface ButtonComponentProps {
  bg?: string;
  border?: boolean;
  txtColor?: string;
  btnWidth?: string;
  btnHeight?: string;
  text: string;
  borderColor?: string;
  textSize?: string;
  paddingHorizontal?: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  bg,
  border,
  txtColor,
  btnHeight,
  text,
  borderColor,
  btnWidth,
  textSize,
  paddingHorizontal
}) => {
  return (
    <button
      className="flex items-center justify-center px-[28px] py-[12px] rounded-[30px]"
      style={{
        background: bg ? bg : "unset",
        border: border ? `1px solid ${borderColor}` : "unset",
        color: txtColor,
        height: btnHeight,
        width: btnWidth ? btnWidth : "unset",
        padding: paddingHorizontal && paddingHorizontal
      }}
    >
      <p className="text-[14px] leading-[18px] font-[900]" 
      style={{
        fontSize: textSize ? textSize : "unset",
      }}>{text}</p>
    </button>
  );
};

export default ButtonComponent;
