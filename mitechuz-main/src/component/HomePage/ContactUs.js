import { IoMdCall } from "react-icons/io";
export default function ContactUs() {
  return (
    <div className="w-full h-full flex">
      <div className="bg-[url(https://htmldemo.net/mitech/assets/images/bg/home-infotechno-contact-bg.webp)] xl:px-36 max-xl:px-8 mx-auto py-20 w-screen flex justify-between">
        <div className="grid grid-cols-1 w-3/5 lg:grid-cols-2 lg:w-11/12 h-full py-10">
          <div className="">
            <h2 className="border-l-2 border-l-orange-300 font-semibold tracking-wider leading-normal text-gray-700 pl-6 text-4xl">
              Obtaining further information by{" "}
              <span className="inline text-blue-700">make a contact</span> with
              our experienced IT staffs.
            </h2>
            <p className="pl-6 text-xl text-gray-600 leading-8 py-4">
              We're available for 8 hours a day! Contact to require a detailed
              analysis and assessment of your plan
            </p>
          </div>
          <div className="w-full h-full grid justify-center items-center">
            <div className="w-full h-4/5 group ">
              <div className="flex justify-center items-center">
              <IoMdCall className="block w-16 h-16 text-blue-700"/>
              </div>
             <div className="text-center justify-center py-4">
              REACH OUT NOW!</div>
            <div className="text-6xl font-bold text-blue-700 ">1900 68668</div>
            <div className="w-full h-28 flex justify-center items-center">
            <button className=" relative text-center h-12 w-32 overflow-hidden font-semibold text-white   transition-all rounded bg-[#d2a98e;] shadow-lg hover:scale-110 hover:bg-blue-700 duration-500 easy-inout hover:shadow-md hover:shadow-blue-700">
              Join us
             </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
