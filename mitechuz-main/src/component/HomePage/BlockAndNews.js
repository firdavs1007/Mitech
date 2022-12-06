import React from "react";
import {HiArrowSmRight} from "react-icons/hi"
import {BsCalendarEvent} from "react-icons/bs"
import { Link } from "react-router-dom";
export default function BlockAndNews() {
  return (
    <div className=" h-full flex items-center justify-center my-16 xl:px-36 max-xl:px-8">
      <div className="text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  justify-center items-center  ">
      <div className="w-96  h-11/12 ">
          <p className="text-gray-500  text-base font-bold">BLOGS & NEWS</p>
          <h2 className="text-3xl tracking-wider my-8 w-[79%] font-bold text-gray-700 ">
            Interesting articles
            <span className="text-3xl text-sky-600"> updated daily</span>
          </h2>
          <div className="">
            
          <p className="-translate-x-7 pb-5 text-base  text-gray-500 font-semibold  hover:text-blue-700 group tracking-normal"  >
          <HiArrowSmRight className="inline-block w-5 h-5 text-blue-700  opacity-0 group-hover:translate-x-5 group-hover:opacity-100   duration-500 ease-in-out " />
            <HiArrowSmRight className="inline-block w-5 h-5 group-hover:opacity-0" /> 
            Ideas for High Returns on Investment
          </p>
          <p className="-translate-x-7 pb-5 text-base  text-gray-500 font-semibold hover:text-blue-700 group tracking-normal">
          <HiArrowSmRight className="inline-block w-5 h-5 text-blue-700 opacity-0 group-hover:translate-x-5 group-hover:opacity-100   duration-500 ease-in-out" />
            <HiArrowSmRight className="inline-block w-5 h-5 group-hover:opacity-0" />
            How Technology Made Businesses More <span className="ml-10" >Efficient</span>
          </p>
          <p className="-translate-x-7 pb-5 text-base text-gray-500 font-semibold hover:text-blue-700 group tracking-normal">
          <HiArrowSmRight className="inline-block w-5 h-5 text-blue-700 opacity-0 group-hover:translate-x-5 group-hover:opacity-100   duration-500 ease-in-out" />
            <HiArrowSmRight className="inline-block w-5 h-5  group-hover:opacity-0" />
            Data Secure on Transitioning to a New Office
          </p>
          <p className="-translate-x-7 pb-5 text-base  text-gray-500 font-semibold hover:text-blue-700 group tracking-normal">
          <HiArrowSmRight className="inline-block w-5 h-5 text-blue-700 opacity-0 group-hover:translate-x-5 group-hover:opacity-100   duration-500 ease-in-out" />
            <HiArrowSmRight className="inline-block w-5 h-5  group-hover:opacity-0" />
            The Keys to Persuading Customers Nowadays
          </p >
          <p className="-translate-x-7 pb-5 text-base  text-gray-500 font-semibold  hover:text-blue-700 group tracking-normal">
          <HiArrowSmRight className="inline-block w-5 h-5 text-blue-700  opacity-0 group-hover:translate-x-5 group-hover:opacity-100   duration-500 ease-in-out" />
            <HiArrowSmRight className="inline-block w-5 h-5 group-hover:opacity-0" />
            Blockchain Technology Effects on Logistics <span className="ml-10">Sector?</span>
          </p >
          </div>
        </div>
        <div className="w-96  h-11/12 ">
            <div>
                <img src="https://htmldemo.net/mitech/assets/images/blog/blog-03-370x230.webp" alt=""/>
            </div>
            <div className="text-left grid gap-y-4">
                <p className="text-gray-500 w-full items-center h-10 flex" >
                 <BsCalendarEvent className="inline-block mr-2" /> February 28, 2019
                </p>
                <h2 className="font-bold text-blue-700 text-2xl">
                5 Ways Technology Has Improved Business Today
                </h2>
                <p className="text-gray-500 text-base">
                They play a role in making operations more seamless, bridging the gap between authorities, consumers and businesses. ...
                </p>
                <Link className="text-blue-700 hover:text-orange-300 duration-700 ease-in-out border-b-2 border-gray-300 w-28" > Read more <HiArrowSmRight className="inline-block ml-2"/> </Link>
            </div>
        </div>
        <div className="w-96  h-11/12 ">
        <div>
                <img src="https://htmldemo.net/mitech/assets/images/blog/blog-02-370x230.webp" alt=""/>
            </div>
            <div className="text-left grid gap-y-4">
                <p className="text-gray-500 w-full items-center h-10 flex" >
                 <BsCalendarEvent className="inline-block mr-2" /> February 28, 2019
                </p>
                <h2 className="font-bold text-blue-700 text-2xl">
                How Wireless Technology is Changing Business
                </h2>
                <p className="text-gray-500 text-base">
                It is far wiser to do your own installations and ensure that all data flowing through the organization has end-to-end encryption. ...
                </p>
                <Link className="text-blue-700 hover:text-orange-300 duration-700 ease-in-out border-b-2 border-gray-300 w-28" > Read more <HiArrowSmRight className="inline-block ml-2"/> </Link>
            </div>
        </div>
      </div>
      </div>


    
  );
}
