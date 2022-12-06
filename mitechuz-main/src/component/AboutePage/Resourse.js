import React from "react";

function Resourse() {
  return (
    <div className="w-4/5 m-auto">
      <div className="mt-10 w-full h-full bg-cover bg-no-repeat md:flex items-center justify-between max-[500px]:flex-col">
        <div className="">
          <h4 className="text-[#B5B2B5] text-lg font-normal mb-4">Resources</h4>
          <h2 className="text-[#343435] text-2xl font-bold mb-4 max-[912px]:text-xl">
            Get a copy of brochure on
          </h2>
          <h2 className="text-[#0E67D5] text-2xl font-bold max-[800px]:text-xl">
            Brand New IT Tech.
          </h2>
          <button className="btn w-3/5 h-14 text-lg font-medium text-white rounded-lg mt-10 bg-[#086AD9] max-[800px]:text-sm">
            Download now (3MB)
          </button>
        </div>
        <div className="">
          <img
            className="mt-10"
            src="https://htmldemo.net/mitech/assets/images/banners/managed-it-services-book-cover.webp"
            alt="img error"
          />
        </div>
      </div>
    </div>
  );
}

export default Resourse;
