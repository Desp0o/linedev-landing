import React from "react";

interface FooterTitleProps {
  title: string;
}

const FooterTitle: React.FC<FooterTitleProps> = ({ title }) => {
  return (
    <h3 className="text-[18px] font-[900] leading-[22px] text-white">
      {title}
    </h3>
  );
};

export default FooterTitle;
