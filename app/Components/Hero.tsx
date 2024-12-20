import { heroText } from "../assets"



function Hero() {


  return (
      <section className={`flex items-center justify-center
      py-[100px] min-h-full`}

      >
        <div className="pt-[70px] text-center">
          <div className="w-full md:3/4 lg:w-1/2 mx-auto">
            {heroText.map(({ title, name, subTitle }) => (
              <div key={name} className="px-2 relative">
                <h1 className="text-5xl sm:text-6xl md:text-7xl
                font-bold my-5
                text-primaryColor">{title} {name}</h1>
                <p className="text-wrap text-sm md:text-lg
              text-white font-thin mb-5 ">{subTitle}</p>
              </div>
            ))}
            <a className="py-2 px-3 md:px-6 md:py-3 bg-primaryColor rounded-lg relative hover:bg-transparent hover:text-primaryColor hover:shadow-md duration-300
          hover:bg-white text-white" href="#Locations">Explore More</a>
          </div>
        </div>
      </section>
  );
}
export default Hero