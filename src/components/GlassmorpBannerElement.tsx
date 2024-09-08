import React, { ReactNode } from "react";

interface GlassmorpBannerElementProps {
  icon: ReactNode;
  text: string;
}

const GlassmorpBannerElement: React.FC<GlassmorpBannerElementProps> = ({
  icon,
  text,
}) => {
  return (
    <div className="flex items-center gap-[8px]">
      {icon}
      <p className="bg-gradient-to-r from-primary  to-secondary 
      bg-clip-text text-transparent text-[20px] font-[900] leading-[24px]">
        {text}
      </p>
    </div>
  );
};

export default GlassmorpBannerElement;
