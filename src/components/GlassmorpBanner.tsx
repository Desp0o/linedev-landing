import { bookIcon } from "../assets/icons/bookIcon";
import { newsPaperLogo } from "../assets/icons/newsPaper";
import GlassmorpBannerElement from "./GlassmorpBannerElement";

const GlassmorpBanner = () => {
  return (
    <div className="px-[30px] py-[54px] bg-glassColor flex items-center gap-[118px] w-fit rounded-[30px] mx-auto">
      <GlassmorpBannerElement icon={newsPaperLogo} text="პროგრამები" />
      <GlassmorpBannerElement icon={newsPaperLogo} text="სიახლეები" />
      <GlassmorpBannerElement icon={bookIcon} text="პორტფოლიო" />
    </div>
  );
};

export default GlassmorpBanner;
