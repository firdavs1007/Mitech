import React from "react"
import Card from "../Card";

const Cards = [
  {
    images:
      "https://htmldemo.net/mitech/assets/images/icons/mitech-box-image-style-06-image-01-120x120.webp",
    heading: "What we can do?",
    title:
      "We put a strong focus on the needs of your business to figure out solutions that best fits your demand and nail it.",
  },
  {
    images:
      "https://htmldemo.net/mitech/assets/images/icons/mitech-box-image-style-06-image-02-120x120.webp",
    heading: "Become our partners?",
    title:
      "Our preventive and progressive approach will help you take the lead while addressing possible threats in managing data.",
  },
  {
    images:
      "https://htmldemo.net/mitech/assets/images/icons/mitech-box-image-style-06-image-03-120x120.webp",
    heading: "Need a hand?",
    title:
      "Our support team is available 24/7 a day, 7 days a week and can get ready for solving any of your situational rising problems.",
  },
];

function AboutProjects() {
  return (
    <div className="bg-zinc-100 h-full xl:px-36 max-xl:px-8 mx-auto">
      <div className="mx-auto text-center ">
        <p className="text-gray-500 text-xl pt-7 font-bold">Our Service</p>
        <h2 className="text-4xl tracking-wider my-5 font-bold text-gray-700 pb-5">
          For your very specific industry,
          <br />
          we have{" "}
          <span className="text-3xl text-sky-600">
            highly-tailored IT solutions.
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {Cards.map((index, item) => (
          <Card item={item} index={index} />
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

export default AboutProjects;
