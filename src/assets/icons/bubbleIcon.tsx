import React from 'react'

interface BubbleIconProps{
    width: number;
    height: number;
}

const BubbleIcon:React.FC<BubbleIconProps> = ({width, height}) => {
  return <svg width={width} height={height} viewBox="0 0 333 333" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_bf_8_41)">
  <circle cx="166.5" cy="166.5" r="146.5" fill="#39B1E4"/>
  </g>
  <g filter="url(#filter1_f_8_41)">
  <circle cx="214.5" cy="119.5" r="50.5" fill="#84D0F0"/>
  </g>
  <defs>
  <filter id="filter0_bf_8_41" x="-52" y="-52" width="437" height="437" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feGaussianBlur in="BackgroundImageFix" stdDeviation="36"/>
  <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_8_41"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_8_41" result="shape"/>
  <feGaussianBlur stdDeviation="9.8" result="effect2_foregroundBlur_8_41"/>
  </filter>
  <filter id="filter1_f_8_41" x="141.6" y="46.6" width="145.8" height="145.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
  <feGaussianBlur stdDeviation="11.2" result="effect1_foregroundBlur_8_41"/>
  </filter>
  </defs>
  </svg>
}

export default BubbleIcon
