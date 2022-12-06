import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const allCard = [
  {
    img: "https://htmldemo.net/mitech/assets/images/box-image/blog-01-330x330.webp",
    heading: "Mitech Management Systems",
    desc: "Our technical experts have a flair for developing",
    desc2: "based on customers needs, global guidelines and trends.",
    span: "clean-coded websites",
  },
  {
    img: "https://htmldemo.net/mitech/assets/images/box-image/mitech-home-infotechno-box-large-image-02-330x330.webp",
    heading: "Reliable Multi-function Technology",
    desc: "Our technical experts have a flair for developing",
    desc2: "based on customers needs, global guidelines and trends.",
    span: "clean-coded websites",
  },
  {
    img: "https://htmldemo.net/mitech/assets/images/box-image/mitech-home-infotechno-box-large-image-03-330x330.webp",
    heading: "Efficient Database Security ",
    desc: "Our technical experts have a flair for developing",
    desc2: "based on customers needs, global guidelines and trends.",
    span: "clean-coded websites",
  },
  
];

function Card() {
  return (
    <div className="xl:px-36 max-xl:px-8 mx-auto">
      <div className="mb-5 text-center" >
        <p className="text-gray-500 text-xl my-5 font-bold">
          HIRE US, WHY NOT?
        </p>
        <h3 className="text-3xl  font-bold tracking-wider leading-10 mt-5">
          How we claim to <span className="text-blue-700">excel?</span>
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
        {allCard.map((item, index) => (
          <div key={index} className="col-span-1 w-full group flex  items-center justify-between ">
            <div className="">
            <div className="flex justify-center shadow-lg   rounded-lg hovered overflow-hidden relative ">
              <img
                src={item.img}
                alt=""
                className="w-full h-full object-cover group-hover:scale-125 ease-in-out duration-500 transitions"
              />
              <div className="absolute bottom-5 font-bold w-52 text-center text-xl  text-white z-10 group-hover:translate-y-20 group-hover:opacity-0 transition  duration-700 ease-in-out">
                <h3>{item.heading}</h3>
              </div>
              <div className="flex items-center justify-center text-center absolute z-0 group-hover:bg-blue-700 group-hover:bg-opacity-70  top-0 left-0 bottom-0 right-0">
              <button
                  className=" py-4 px-8 transition  group-hover:bg-white group-hover:text-blue-700 group-hover:opacity-100 translate-y-12 group-hover:translate-y-0 duration-500 ease-in-out opacity-0 text-lg font-bold rounded-md  "
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="mt-5 w-72 mx-auto">
              <p className="text-center text-sm font-semibold text-blue-500 ">
                {item.desc}{" "}
                <span className="text-black">
                  {item.span}{" "}
                  <span className="text-gray-500">{item.desc2}</span>
                </span>
              </p>
            </div>
          </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-5 mb-10 hover:scale-95 transitions">
        <Link to="#" className="flex items-center justify-center">
          <p className="text-lg  border-b border-gray-500 font-semibold text-blue-700 tracking-wide">
            Learn more about how we work span
          </p>
          <BsArrowRight className="text-blue-700 ml-2 mt-1.5" />
        </Link>
      </div>
    </div>
  );
}

export default Card;
