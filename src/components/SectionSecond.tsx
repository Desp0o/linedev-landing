import ImageComponent from "./ImageComponent";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img4 from "../assets/images/img4.png";
import img3 from "../assets/images/img3.png";
import img5 from "../assets/images/img5.png";
import SecondSectionLeftSide from "./SecondSectionLeftSide";

const SectionSecond = () => {
  return (
    <div className="flex items-center justify-center gap-[24px]">
      <div className="w-[520px] h-[580px] relative">
        <ImageComponent
          image={img1}
          width={"78px"}
          height={"78px"}
          left={"0px"}
          top={"106px"}
        />

        <ImageComponent
          image={img2}
          width={"174px"}
          height={"174px"}
          left={"0px"}
          bottom={"30px"}
        />

        <ImageComponent
          image={img4}
          width={"77px"}
          height={"77px"}
          left={"200px"}
          bottom={"32px"}
        />

        <ImageComponent
          image={img3}
          width={"372px"}
          height={"454px"}
          left={"98px"}
          top={"0px"}
        />

        <ImageComponent
          image={img5}
          width={"174px"}
          height={"174px"}
          right={"0px"}
          bottom={"0px"}
        />
      </div>

      <SecondSectionLeftSide />
    </div>
  );
};

export default SectionSecond;
