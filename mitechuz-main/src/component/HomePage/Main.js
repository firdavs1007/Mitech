import React from "react";

function Main() {
  return (
    <div className="w-full h-full pt-20 bg-[#F4EFE9FF] flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col  justify-center md:items-start px-2 py-20">
          <p className="text-xl text-blue-500 leading-7">
            IT Design & Consulting
          </p>
          <h3 className="text-5xl font-semibold leading-loose py-4 tracking-wide">
            Facilitate All Local IT-related Service Providers
          </h3>
          <p className="text-base">
            Highly Tailored IT Design, Management & Support Services.
          </p>
          <button className="px-6 py-3 bg-blue-700 my-4 sm:w-[60%]font-bold text-white rounded-lg">
            Get details.
          </button>
        </div>
        <div className="flex flex-col justify-center max-md:hidden">
          <div className="before:absolute before:shadow-[0_0_0_5rem_#F0E8E2FF] inline before:bg-[#E5D5C8] before:ml-10 before:mt-28  z-0 before:w-32 before:h-32 min-[320px]:before:w-32 min-[320px]:before:h-32  sm:before:w-52 sm:before:h-52 mdbefore:w-44 md:before:h-44  lg:before:w-72 lg:before:h-72 before:rounded-full "></div>
          <div className="inline z-10 ">
            <img
              className=" sm:w-48 md:w-96  lg:w-full"
              src="https://htmldemo.net/mitech/assets/images/hero/home-infotechno-main-slider-slide-01-image-02.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
//py-3 text-3xl md:text-5xl font-semibold leading-10
