import React from "react";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Tooltip, Button } from "@material-tailwind/react";
import logo from '../../img/logo.webp'

function Footer(props) {
  return (
<footer className="text-center lg:text-left bg-[#F8F8F8FF] text-gray-600">
  <div className="mx-6 py-12 text-center md:text-left">
    <div className="container mx-auto grid grid-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
      <div className="">
        <h6 className="
            uppercase
            font-semibold
            mb-4
            flex
            items-center
            justify-center
            md:justify-start
          ">
   
          <img className="w-44" src={logo} alt="" />
        </h6>
        <p className="mb-4">
          <a href="#!" className="text-gray-600 text_hover">58 Howard Street #2 San Francisco, CA 941</a>
        </p>
        <p className="mb-4">
          <a href="#!" className="text-gray-600 text_hover">contact@aeroland.com</a>
        </p>
        <p className="mb-4">
          <a href="#!" className="text-gray-600 text_hover font-semibold">(+68)1221 09876</a>
        </p>
        <p>
          <a href="#!" className="text-blue-600 text_hover">www.mitech.xperts.com</a>
        </p>
      </div>
      <div className="">
        <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
        IT Services
        </h6>
        <p className="mb-4">
          <a href="#!" className="text-gray-600 text_hover">Managed IT</a>
        </p>
        <p className="mb-4">
          <a href="#!" className="text-gray-600 text_hover">IT Support</a>
        </p>
        <p className="mb-4">
          <a href="#!" className="text-gray-600 text_hover">IT Consultancy</a>
        </p>
        <p>
          <a href="#!" className="text-gray-600 text_hover">Cloud Computing</a>
        </p>
        <p>
          <a href="#!" className="text-gray-600 text_hover">Cyber Security</a>
        </p>
      </div>
      <div className="">
        <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
        Quick links
        </h6>
        <p className="mb-4">
          <a href="#!" className="text-gray-600 text_hover">Pick up locations</a>
        </p>
        <p className="mb-4">
          <a href="#!" className="text-gray-600 text_hover">Terms of Payment</a>
        </p>
        <p className="mb-4">
          <a href="#!" className="text-gray-600 text_hover">Privacy Policy</a>
        </p>
        <p>
          <a href="#!" className="text-gray-600 text_hover">Where to Find Us</a>
        </p>
      </div>
      <div className="">
        <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
        Support
        </h6>
        <p className="mb-4">
          <a href="#!" className="text-gray-600 text_hover">Forum Support</a>
        </p>
        <p className="mb-4">
          <a href="#!" className="text-gray-600 text_hover">Help & FAQ</a>
        </p>
        <p className="mb-4">
          <a href="#!" className="text-gray-600 text_hover">Contact Us</a>
        </p>
        <p>
          <a href="#!" className="text-gray-600 text_hover">Pricing and plans</a>
        </p>
        <p>
          <a href="#!" className="text-gray-600 pt-5 text_hover">Cookies Policy</a>
        </p>
        
      </div>
      <div className="">
        <h6 className="mb-4 flex justify-center md:justify-start">
         
        </h6>
          <img className="my-5 pt-5" src="https://htmldemo.net/mitech/assets/images/icons/aeroland-button-google-play.webp" alt="" />
          <img src="https://htmldemo.net/mitech/assets/images/icons/aeroland-button-app-store.webp" alt="" />
      </div>
    </div>
  </div>
  <div className="p-6 md:px-24 bg-[#F8F8F8FF] flex justify-between max-sm:flex-col items-center">
    <span>© {new Date().getFullYear()} Mitech. All Rights Reserved.:</span>
    <div className="flex max-sm:mt-4">

    <Tooltip
    className="bg-blue-600 px-2 py-1 text-white font-semibold"
      content="Twitter"
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
      }}
    >
      <Button variant="gradient" className="hover:bg-blue-700 hover:text-white text-grey-200 border-grey-200 borde w-12 h-12 rounded-full mx-2"><BsTwitter className="text-lg -ml-2" /></Button>
    </Tooltip>

    <Tooltip
    className="bg-blue-600 px-2 py-1 text-white font-semibold"
      content="Facebook"
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
      }}
    >
      <Button variant="gradient" className="hover:bg-blue-600 hover:text-white  text-grey-200 border-grey-200 borde w-12 h-12 rounded-full mx-2"><FaFacebookF className="text-lg -ml-2" /></Button>
    </Tooltip>
    <Tooltip
    className="bg-blue-600 px-2 py-1 text-white font-semibold"
      content="Instagram"
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
      }}
    >
      <Button variant="gradient" className="hover:bg-blue-600 hover:text-white  text-grey-200 border-grey-200 borde w-12 h-12 rounded-full mx-2"><FaInstagram className="text-lg -ml-2" /></Button>
    </Tooltip>
    <Tooltip
    className="bg-blue-600 px-2 py-1 text-white font-semibold "
      content="Linkidin"
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
      }}
    >
      <Button variant="gradient" className="hover:bg-blue-600 hover:text-white  text-grey-200 border-grey-200 border w-12 h-12 rounded-full mx-2"><BsLinkedin className="text-lg -ml-2" /></Button>
    </Tooltip>

    </div>
  </div>
  
</footer>

  );
}

export default Footer;
