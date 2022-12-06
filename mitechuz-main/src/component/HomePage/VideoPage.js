import React from "react";
import { IoIosPlay } from "react-icons/io";
export default function VideoPage() {
  return (
    <div className="w-full h-full ">
      <div className=" f-full h-full bg-[url(https://htmldemo.net/mitech/assets/images/bg/home-infotechno-video-intro-bg.webp)] bg-no-repeat br-cover py-16 md:py-32 lg:py-32 ">
        <div className="flex justify-center items-center ">
          <div className="md:w-1/2"></div>
          <div className="w-2/5">
            <h2 className="w-full leading-tight text-left text-white font-semibold text-5xl tracking-wide ">
              Share the joy of achieving glorious moments <br />& climbing up
              the top.
            </h2>
            <div className="flex items-center justify-start relative pt-10 group ">
              <span className="w-20 h-10 rounded-xl bg-red-700 flex justify-center cursor-pointer items-center group-hover:scale-125  duration-300 ease-in-out ">
                <IoIosPlay className="w-7 h-7  text-white z-10" />
              </span>
              <span className="w-20 h-10 rounded-xl absolute -translat-x-12 bg-red-700 flex justify-center items-center group animate-ping ">
              </span>
              <span class=" inline-block ml-3 w-40 text-lg text-white font-mono">Watch video intro</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
