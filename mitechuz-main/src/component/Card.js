import { AiOutlineArrowRight } from "react-icons/ai";

function Card({item, index}) {
  return (
    <div key={item} className="mx-10 h-1/1 w-4/5 rounded-2xl relative  text-left inline-block bg-white g hover:shadow-indigo-600 hover:shadow-2xl group ">
        <div className="p-6">
          <div className=" ">
              <img className="mx-auto pt-8" src={index.images} alt='rasm'/>
          </div>
          <h1 className="font-bold text-xl  ">{index.heading}</h1>
          <h6 className="py-6 text-sm px-10">{index.title}</h6>
        </div>
        <div className="w-full flex justify-center translate-y-5 h-12  ">
        <button className=" relative inline-flex items-center justify-start h-full w-28 overflow-hidden font-semibold text-indigo-600   transition-all  duration-150 ease-in-out rounded group-hover:pl-10 group-hover:pr-6 bg-gray-100 ">
      <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
      <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12"> 
      <AiOutlineArrowRight class="w-5 h-5 text-indigo-600" />
      </span>
      <span class="absolute -left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
      <p className="text-xl text-white ">Read more</p>
      </span>
      <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white"></span>
          </button>
        </div>
    </div>
  )
}

export default Card