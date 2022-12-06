import Card from "../Card";

const All = [
  {
    images:
      "https://htmldemo.net/mitech/assets/images/icons/mitech-box-image-style-01-image-01-100x108.webp",
    heading: "IT Design",
    title:
      "We provide the most responsive and functional IT design for companies and businesses worldwide.",
  },
  {
    images:
      "https://htmldemo.net/mitech/assets/images/icons/mitech-box-image-style-01-image-02-100x108.webp",
    heading: "IT Management",
    title:
      "It's possible to simultaneously manage and transform information from one server to another.",
  },
  {
    images:
      "https://htmldemo.net/mitech/assets/images/icons/mitech-box-image-style-01-image-03-100x108.webp",
    heading: "Data Security",
    title:
      "Back up your database, store in a safe and secure place while still maintaining its accessibility.",
  },
];

function ServiceCart() {
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
        {All.map((index, item) => (
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

export default ServiceCart;
