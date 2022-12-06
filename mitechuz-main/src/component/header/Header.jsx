import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { HiBars3 } from "react-icons/hi2";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Navbar from "./Navbar";
import logoImg from "../../img/logo.webp";
import { Link } from "react-router-dom";
import "./header.css";
import AOS from "aos";
import "aos/dist/aos.css";

const lang = [
  {
    name: "England",
    img: "https://htmldemo.net/mitech/assets/images/flags/en.webp",
  },
  {
    name: "Français",
    img: "https://htmldemo.net/mitech/assets/images/flags/fr.webp",
  },
  {
    name: "Deutsch",
    img: "https://htmldemo.net/mitech/assets/images/flags/de.webp",
  },
];

export function DropdownLang() {
  const [isActive, setIsActive] = useState(false);
  const [select, setSelect] = useState(lang[0].name);
  const [selectImg, setSelectImg] = useState(lang[0].img);
  return (
    <div className="w-44 h-auto relative">
      <div
        className="p-2.5 cursor-pointer flex items-center uppercase"
        onClick={(e) => setIsActive(!isActive)}
      >
        <img
          className="w-[40px] h-[25px] object-cover mr-4 "
          src={selectImg}
          alt=""
        />
        {select} <BsChevronDown className="ml-3 text-ml" />
      </div>
      {isActive && (
        <div
          className="absolute bg-white drop-shadow-lg top-10 left-0 w-full"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          {lang.map((el) => (
            <div
              onClick={(e) => {
                setSelect(el.name);
                setSelectImg(el.img);
                setIsActive(false);
              }}
              key={el.name}
              className="p-2.5 transition-all hover:bg-slate-100  cursor-pointer uppercase flex"
            >
              <img
                className="w-[40px] h-[25px] object-cover mr-2"
                src={el.img}
                alt=""
              />{" "}
              {el.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Header(props) {
  const [activeNav, setActiveNav] = useState(false);
  const [activeForm, setActiveForm] = useState(false);

  const handleNavbar = () => {
    setActiveNav(!activeNav);
  };

  const handleForm = () => {
    setActiveForm(!activeForm);
  };

  AOS.init();
  return (
    <div className="fixed w-full z-20">
      {activeNav && (
        <div
          onClick={handleNavbar}
          className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)] cursor-pointer"
        ></div>
      )}
      <header className="bg-[#ffffffe8] px-36 mx-auto h-20 w-full flex items-center justify-between shadow-md">
        <Link to="/">
          {" "}
          <img
            className="w-40"
            src="https://htmldemo.net/mitech/assets/images/logo/logo-dark.webp"
            alt="Logo"
          />
        </Link>
        {/* START FORM SELECT AND SEARCH */}
        <form action="" className="flex items-center max-md:hidden">
          <Navbar />
          <div className="max-md:hidden">
            <DropdownLang />
          </div>
 
        </form>
        {/* END FORM SELECT AND SEARCH */}

        {/* menu icons start */}
        <div className="md:hidden right-2 max-md:right-10 cursor-pointer max-md:absolute">
          <HiBars3 className="text-[35px]" onClick={handleNavbar} />
        </div>
        {/* menu icons end */}

        {/* three dot start */}
        <div
          className="absolute right-1 text-[35px] md:hidden cursor-pointer"
          onClick={handleForm}
        >
          <BiDotsHorizontalRounded className="text-blue-500" />
        </div>
        {/* three dot end */}

        {/* START ACTIVE NAV RIGHT */}
        {activeNav && (
          <div
            className={
              { activeNav }
                ? "fixed right-0 top-0 w-96 h-[100%] bg-blue-600 z-20 max-sm:w-3/4"
                : "hidden"
            }
            data-aos={activeNav ? "fade-left" : "fade-right"}
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            <div className="w-full bg-white h-24 p-4 flex items-center justify-between">
              <img className="w-48" src={logoImg} alt="Logo" />
              {/* START CLOSE NAV */}
              <div
                className="w-24 p-2 relative cursor-pointer parents"
                onClick={handleNavbar}
              >
                <div className="w-10 max-sm:w-7 parent_item  h-1 rotate-45 transition-all cursor-pointer absolute my-1 bg-black"></div>
                <div className="w-10 max-sm:w-7 parent_item  h-1 -rotate-45 transition-all group-[:nth-of-type(1)_&]:hover:rotate-0 cursor-pointer  absolute my-1 bg-black"></div>
              </div>
              {/* END CLOSE NAV */}
            </div>
            <div className="w-full h-full px-10 py-4 flex flex-col">
              <Link
                to="/"
                onClick={handleNavbar}
                className="text_hover w-full mt-3 text-white fonr-bold text-lg border-b-[1px] border-[rgba(255,254,254,0.15)] py-4"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={handleNavbar}
                className="text_hover w-full mt-3 text-white fonr-bold text-lg border-b border-[rgba(255,254,254,0.15)] py-4"
              >
                About{" "}
              </Link>
            </div>
          </div>
        )}
        {/* END ACTIVE NAV RIGHT */}
      </header>
      {/* START SCTIVE SELECT AND SEARCH */}
      {activeForm && (
        <div
          className="w-[90%] absolute left-[5%] top-24 h-auto bg-white p-4 shadow-md flex items-center justify-between max-sm:flex-col"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <DropdownLang />
        </div>
      )}
      {/* END SCTIVE SELECT AND SEARCH */}
    </div>
  );
}

export default Header;
