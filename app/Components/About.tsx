import Image from "next/image"
import { AboutImg, aboutText } from "../assets"

function About() {
  return (
    <section className="py-10 bg-white">
        <div className="mx-auto flex flex-col items-center text-center mb-6">
          <h1 className="text-5xl font-bold text-primaryColor">About</h1>
          <p className="max-w-[960px] text-sm mt-1 text-[#ccc]">
            Who we are ? 
          </p>
        </div>
        <div className="container w-[90%] mx-auto relative">
          <div className="flex items-center text-center text-sm px-1 md:text-start md:text-lg md:px-0">
            <div className="md:basis-[50%] ">
                {
                  aboutText.map((text , i) => (
                    <div key={i}
                    className="flex flex-col gap-5 mt-10 md:mt-[60px]">
                      <h6>{text.text1}</h6>
                      <h6>{text.text2}</h6>
                    </div>
                  ))
                }
            </div>
            <div>
                {
                  AboutImg.map((img , i) => (
                    <div  key={i} 
                    className={`hidden md:flex absolute right-0 top-0 w-[300px] h-[400px] 
                    ${i == 1 ? 'right-[280px]' : 'top-6'}`}>
                      <Image src={img} alt={`about-${i}`} fill
                      />
                    </div>
                  ))
                }
            </div>
        </div>
        </div>
    </section>
  )
}
export default About