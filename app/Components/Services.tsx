import { services } from "../assets"
import Image from "next/image";

function Services() {
    
  return (
    <section className="py-10 bg-white">
        {/* <Title title="Services" subTitle="What will you experience ?"/> */}
        <div className="mx-auto flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold text-primaryColor">Services</h1>
        <p className="max-w-[960px] text-sm mt-1 text-[#ccc]">
            What will you experience ?
          </p>
          </div>
        <div
        className="container w-[90%] mx-auto
        flex items-center justify-between px-3 "
        >
            <div className="w-full flex flex-col items-center
            mt-9 gap-7">
                {services.map(({title , subTitle , img} , index) => (
                    <div key={title}
                    className={`flex flex-col-reverse ${index % 2 == 0 ? "md:flex-row-reverse" : "md:flex-row"} gap-4 
                    bg-[#eee] rounded-lg overflow-hidden`}>
                        <div className="p-5">
                            <h1 className="text-2xl md:text-xl font-bold text-secondaryColor mb-6">{title}</h1>
                            <p className={`text-sm lg:max-w-[200px] "text-[#777]" leading-5`}>{subTitle}</p>
                        </div>
                        <div className="relative">
                            <Image alt={`${img}`} src={img} 
                            width={580} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
export default Services