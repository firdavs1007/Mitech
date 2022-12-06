import { AiFillStar } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';

function AboutCall() {
  return (
    <div className="w-[98%] m-auto">
            <div className="mt-10 w-full h-full md:flex items-center justify-between ">
            <div className=" max-md:mx-6">
                <img className="mt-10" src="https://htmldemo.net/mitech/assets/images/banners/home-cybersecurity-contact-bg-image.webp" alt="img error" />
            </div>
            <div className="max-md:mx-6 my-4">
            <h4 className="text-[#000000] text-4xl max-[450px]:ml-[88px] ml-32 font-semibold ">4.9/5.0</h4>
            <h2 className="text-[#FEB801] text-2xl flex  font-bold mt-4 max-[450px]:mx-14 mx-24"><AiFillStar className='mr-3' /><AiFillStar className='mr-3' /><AiFillStar className='mr-3' /><AiFillStar className='mr-3' /><AiFillStar className='mr-3' /></h2>
            <h2 className="text-[#868686] ml-22 mt-4 text-xl ">by 700+ customers for 3200+ clientss</h2>
            <h2 className='text-[#121212] tracking-widest  flex relative ml-16 mt-12 font-semibold text-sm'><AiOutlinePhone className='text-6xl text-[#C8B0A4] absolute -left-20'/>CALL FOR ADVICE NOW! </h2>
            <h4 className='text-blue-700 ml-16 mt-4 mb-12  font-semibold max-[450px]:text-2xl text-4xl'>1900 68668</h4>
            <h2 className='text-[#121212] tracking-widest  flex relative mb-5 ml-16 font-semibold text-sm'><HiOutlineMail className='text-[#C8B0A4]  text-6xl absolute -left-20'/>SAY HELLO</h2>
            <h4 className='text-blue-700 ml-16 font-semibold max-[450px]:text-2xl text-4xl'>hello@mitech.com</h4>
            </div>        
            </div>
        </div>
  )
}

export default AboutCall