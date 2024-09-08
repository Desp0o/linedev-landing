import React from "react";
interface ImageComponentProps {
  image: string;
  width: string;
  height: string;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  image,
  width,
  height,
  left,
  top,
  bottom,
  right
}) => {
  return (
    <img
      src={image}
      alt="image component"
      className="drop-shadow-primaryShadow absolute"
      style={{ width: width, height: height, left: left, top: top, bottom: bottom, right: right }}
    />
  );
};

export default ImageComponent;
