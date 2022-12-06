import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineArrowRight} from "react-icons/ai"
export default function WhyUs() {
  return (
    <div className="h-full flex justify-between align-middle xl:px-36 max-xl:px-8 ">
        <div className=" md:w-4/5 content-center grid grid-cols-1 md:grid-cols-2 ">
          <div className="text-left w-full  md:w-11/12" >
            <p className="text-gray-500  text-base font-bold">
              OUR COMPANY
            </p>
            <h2 className="text-3xl tracking-wider my-8 w-[79%] font-bold text-gray-700 ">
              We've been thriving in 
              <span className="text-3xl text-sky-600"> 38 years</span>
            </h2>
            <p className="text-left text-base space-x-4 my-8 text-slate-500">
              Mitech specializes in technological and IT-related services such
              as product engineering, warranty management, building cloud,
              infrastructure, network, etc. We put a strong focus on the needs
              of your business to figure out solutions that best fits your
              demand and nail it.
            </p>
            <button className="px-8 py-4 bg-sky-600 mt-8 font-bold text-white text-sm rounded-lg">
              Join us now
            </button>
          </div>
          <div className=" text-left  w-11/12  ">
             <ul >
                <li className="m-6 relative group">
                  <Link>
                    <div className=" group-hover:text-blue-600 font-extrabold text-3xl text-gray-400">
                      01
                    </div>
                    <div className="flex  items-center justify-between">
                    <div className="ml-14 text-2xl group-hover:text-blue-600 easy-in-out duration-700 font-bold border-t-2 border-gray-300 pt-5 ">
                    How we can help your business? 
                    </div>
                    <div>
                    <span class="absolute ml-5 md:pr-4 duration-200 group-hover:opacity-0 ease-out "> 
                    <AiOutlineArrowRight className="w-5 h-5" />
                    </span> 
                    <span class="absolute ml-5 pr-4  duration-200 opacity-0 text-blue-600 -translate-x-6 ease-out group-hover:opacity-100 group-hover:translate-x-0 "> 
                    <AiOutlineArrowRight className="w-5 h-5"/>
                   </span>
                    
                    </div>
                    </div>
                    </Link>
                </li>
                
                <li className="m-6 relative group">
                  <Link>
                    <div className=" group-hover:text-blue-600 font-extrabold text-3xl text-gray-400">
                      02
                    </div>
                    <div className="flex  items-center justify-between">
                    <div className="ml-14 text-2xl group-hover:text-blue-600 easy-in-out duration-700 font-bold border-t-2 border-gray-300 pt-5 ">
                    Why become our partner?  
                    </div>
                    <div>
                    <span class="absolute ml-5 pr-4 duration-200 group-hover:opacity-0 ease-out "> 
                    <AiOutlineArrowRight className="w-5 h-5"/>
                    </span> 
                    <span class="absolute ml-5 pr-4  duration-200 opacity-0 text-blue-600 -translate-x-6 ease-out group-hover:opacity-100 group-hover:translate-x-0 "> 
                    <AiOutlineArrowRight className="w-5 h-5"/>
                      </span>
                    </div>
                    </div>
                  </Link>
                </li>
                
                <li className="m-6 relative group">
                  <Link to>
                    <div className=" group-hover:text-blue-600 font-extrabold text-3xl text-gray-400">
                      03
                    </div>
                   <div className="flex  items-center justify-between">
                   <div className="ml-14 text-2xl group-hover:text-blue-600 easy-in-out duration-700 font-bold border-t-2 border-gray-300 pt-5 ">
                    H What are the best of Mitech? 
                    </div>
                   <div>
                    <span class="absolute ml-5 pr-4 duration-200 group-hover:opacity-0 ease-out "> 
                    <AiOutlineArrowRight className="w-5 h-5"/></span> 
                    <span class="absolute ml-5 pr-4  duration-200 opacity-0 text-blue-600 -translate-x-6 ease-out group-hover:opacity-100 group-hover:translate-x-0 "> 
                    <AiOutlineArrowRight className="w-5 h-5"/>
                    </span>
                    </div>
                   </div>
                  </Link>
                </li>
              </ul>
            
          </div>
        </div>
      </div>
  )
}
