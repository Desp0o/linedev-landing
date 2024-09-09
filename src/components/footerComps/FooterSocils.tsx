import React, { ReactNode } from 'react'

interface FooterSocilsProps{
    socialName: string;
    icon: ReactNode;
}

const FooterSocils:React.FC<FooterSocilsProps> = ({icon, socialName}) => {
  return (
    <div className='flex items-center gap-6px'>
        {icon}
        <p className='text-[16px] text-white leading-[18px]'>{socialName}</p>
    </div>
  )
}

export default FooterSocils