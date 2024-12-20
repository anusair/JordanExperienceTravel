import { locations } from "../assets"
import Image from "next/image";
import { BiLocationPlus } from "react-icons/bi";
import { TbCalendarClock } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";

function Locations() {
  return (
    <section className="py-16 bg-[#eee]" id="Locations">
      <div className="container w-[90%] mx-auto">
        <div className="mx-auto flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-primaryColor">Explore Iconic Locations ✈️</h1>
          <p className="md:max-w-[960px] px-2 text-sm mt-8 text-[#ccc]">
            Discover Jordan top destinations that promise unforgettable
            experiences, This land is distinguished by its unique ecological
            diversity, encompassing vast deserts that tell stories of raw
            nature, valleys teeming with life, and coastlines that embrace the
            waves of the sea.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-9 gap-5">
          {locations.map(({ title, img, desc, price , days}, i) => (
            <div key={i} className="md:w-1/4 w-full p-2">
              <div className="relative  w-full h-[320px] rounded-xl overflow-hidden">
                <Image src={img} alt={title} fill className="" />
              </div>
              <div>
                {/* location icon title price */}
                <div className="flex items-center justify-between mt-5">
                  <div className="flex flex-row-reverse items-center gap-2">
                    <h1 className="font-bold text-lg">{title}</h1>
                    <BiLocationPlus className="mb-1" />
                  </div>
                  <h5 className="font-bold text-primaryColor">{price}$</h5>
                </div>
                <div>
                  {/* detaile */}
                  <p className="text-sm my-3 w-full text-gray-600">{desc}</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <TbCalendarClock />
                    <p className="text-sm">{days} days</p>
                  </div>
                  <div className="flex items-center gap-1 cursor-pointer text-[#ccc] 
                  hover:text-black duration-300">
                    <p>More details</p>
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Locations