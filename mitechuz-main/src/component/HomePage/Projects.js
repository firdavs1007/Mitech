import { AiOutlineArrowRight } from "react-icons/ai";
const All = [
  {
    images:
      "https://htmldemo.net/mitech/assets/images/projects/case-study-01-480x298.webp",
    heading: "Mitech-Smart Vision",
    categorias: "Cyber security",
    title:
      "At Mitech, we have a holistic and integrated approach towards core modernization to experience technological evolution",
  },
  {
    images:
      "https://htmldemo.net/mitech/assets/images/projects/case-study-02-480x298.webp",
    heading: "Arden-Internal Networking",
    categorias: "Cyber security",
    title:
      "The prospects for a company operating in this new market are varied and exciting. The potential",
  },
  {
    images:
      "https://htmldemo.net/mitech/assets/images/projects/case-study-03-480x298.webp",
    heading: "A Freeserve case study",
    categorias: "Cyber security",
    title:
      "The prospects for a company operating in this new market are varied and exciting. The potential",
  },
];

function ServiceCart() {
  return (
    <div className="bg-zinc-100  h-full xl:px-36 max-xl:px-8 mx-auto">
      <div className="mx-auto text-center ">
        <p className="text-gray-500 text-xl py-5 font-bold">CASE STUDIES</p>
        <h2 className="text-4xl tracking-wider pb-10 font-bold text-gray-700 ">
          Proud projects that{" "}
          <span className=" text-sky-600"> make us stand out </span>
        </h2>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {All.map((index, item) => (
          <div
          key={item}
          className="h-1/1 rounded-2xl relative  text-left inline-block bg-white group "
        >
          <div className="">
            <div className=" ">
              <img
                className="mx-auto rounded-t-2xl"
                src={index.images}
                alt="rasm"
              />
            </div>
            <div className="p-6">
              <h1 className="font-bold text-xl  ">{index.heading}</h1>
              <h6 className="py-6 text-sm h-28 ">{index.title}</h6>
            </div>
          </div>
          <div className="text-center overflow-y-hidden h-16 border-t-2 w-full border-gray-200 ">
            <span className="opacity-100 inline-block text-blue-700 font-bold tracking-wider transition z-10   translate-y-6   group-hover:opacity-0">
              View case study
              <AiOutlineArrowRight class="w-5 h-5 inline-block " />
            </span>
            <button
              class="flex items-center text-white font-bold tracking-wider z-0  justify-center translate-y-8 group-hover:-translate-y-6 opacity-0 group-hover:opacity-100 bg-white group-hover:bg-blue-700 w-full h-16 transition duration-700 easy-in-out            
              rounded-b-2xl  ..."
            >
              <span className="opacity-0 group-hover:opacity-100">
                View case study
                <AiOutlineArrowRight class="w-5 h-5 inline-block " />
              </span>
            </button>
          </div>
        </div>
        ))}
      </div>
      <div className="text-center pt-20">
        <h2 className=" w-full pb-20 text-xl tracking-wider my-5 font-bold text-gray-700 ">
          Challenges are just opportunities in disguise.{" "}
          <span className="text-sky-600">Take the challenge!</span>
        </h2>
      </div>
    </div>
  );
}

export default ServiceCart;
