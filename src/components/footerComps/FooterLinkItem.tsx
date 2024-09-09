import React from "react";
import { Link } from "react-router-dom";

interface FooterLinkProps {
    linkName: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ linkName }) => {
  return (
    <Link to="/" className="text-[16px] font-[400] leading-[18px] text-white">
      {linkName}
    </Link>
  );
};

export default FooterLink;
