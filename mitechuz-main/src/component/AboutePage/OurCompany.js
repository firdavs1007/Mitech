import {BsArrowRight} from "react-icons/bs"

function OurCompany() {
  return (
    <div className="w-4/5 m-auto my-10">
      <h3 className="text-center text-sm font-medium text-[#B7B6B6]">
        OUR COMPANY
      </h3>
      <h1 className="text-3xl font-bold text-center m-auto md:w-[55%]">
        We run all kinds of IT services that vow your{" "}
        <b className="text-[#1962CA]">success</b>
      </h1>
      <div className="w-full h-full md:flex items-center justify-center">
        <div className="-mt-10">
          <h1 className="text-[200px] flex items-center font-black text-[#D2A88F]">
            38
            <h6 className="text-[#A19D9A] font-normal text-sm mt-20">
              YEARS' <br /> EXPERIENCE <br /> IN IT
            </h6>
          </h1>
          <h4 className="text-[#111] font-bold">
            More About Our Succes Stories
          </h4>
        </div>
        <div className="">
          <p className="w-3/5 md:mt-6 md:ml-20 text-[#A19D9A] font-normal max-lg:w-full max-md:mt-20 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
            reiciendis nulla iste illum, repellendus, quaerat explicabo cum
            praesentium eaque in dolores assumenda distinctio blanditiis
            similique vero ipsa libero.
          </p>
          <span className="text-[#4d8ce6] md:ml-20 mt-16 flex font-normal">
            Discover Now
            <BsArrowRight className="mt-1 ml-1" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default OurCompany;
