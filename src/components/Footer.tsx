import { facebookIcon } from "../assets/icons/facebook"
import { instaIcon } from "../assets/icons/insta"
import { tiktokIcon } from "../assets/icons/tiktok"
import { youtubeIcon } from "../assets/icons/youtube"
import FooterLink from "./footerComps/FooterLinkItem"
import FooterSocils from "./footerComps/FooterSocils"
import FooterTitle from "./footerComps/FooterTitle"
import Subscribe from "./footerComps/Subscribe"

const Footer = () => {
  return (
    <div className='relative bg-gradient-to-r from-thirdBlue  to-secondary w-full pt-[104px] pb-[42px] flex items-start justify-center gap-[138px]'>
        <div className="flex flex-col gap-[16px]">
          <FooterTitle title="ნავიგაცია" />
          <FooterLink linkName="ჩვენ შესახებ" />
          <FooterLink linkName="წესები და პირობები" />
          <FooterLink linkName="კორპორატიული გაყიდვები" />
          <FooterLink linkName="კარიერა" />
        </div>

        <div className="flex flex-col gap-[16px]">
          <FooterTitle title="გადახდები" />
          <FooterLink linkName="გადახდის მეთოდები" />
          <FooterLink linkName="გარანტია" />
          <FooterLink linkName="განვადება" />
        </div>

        <div className="flex flex-col gap-[16px]">
          <FooterTitle title="გამოგვყევი" />
          <FooterSocils icon={facebookIcon} socialName="Facebook" />
          <FooterSocils icon={youtubeIcon} socialName="Youtube" />
          <FooterSocils icon={instaIcon} socialName="Instagram" />
          <FooterSocils icon={tiktokIcon} socialName="Tiktok" />
        </div>

        <div className="flex flex-col gap-[16px]">
          <FooterTitle title="კონტაქტი" />
          <FooterLink linkName="info@linedev.ge" />
          <FooterLink linkName="+995 (32) 2 60 60 60" />
        </div>

        <Subscribe />
    </div>
  )
}

export default Footer