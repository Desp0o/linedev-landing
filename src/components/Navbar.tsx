import { Link } from "react-router-dom";

const navItemsArr = [
  "კურსები",
  "ჩვენ შესახებ",
  "ბლოგი",
  "სიახლეები",
  "კონტაქტი",
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between md:px-[40px] lg:px-[110px]">
      <p className="text-[24px] font-extrabold leading-[30px]">LINEDEV</p>
      <div className="hidden md:flex items-center gap-[28px]">
        {navItemsArr.map((item, index) => {
          return (
            <Link
              to="/"
              key={index}
              className="cursor-pointer text-[16px] leading-[18px]"
            >
              {item}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
