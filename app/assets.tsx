import petraBackGround from "./images/petra-background.jpg";
import nature from "./images/Umm-QaisAI.webp";
import cultural from "./images/cultural-Experience.webp";
import historical from "./images/PetraAI.webp"
import WadiRum from "./images/WadiRumLocation.jpg";
import Petra from "./images/PetraLocation.jpg";
import Aqaba from "./images/Aqaba.jpg";
import DeadSea from "./images/DeadSea.jpg";
import About1 from "./images/About-1.jpg"
import About2 from "./images/About-2.jpg"

export const navBar = ["Home", "Trip", "About", "Contact"];

export const heroText = [
  {
    title: "Discover",
    name: "Jordan",
    subTitle: `Explore ancient treasures, breathtaking landscapes, and vibrant cultures.
        From the iconic Petra to the serene Dead Sea, Jordan invites you to embark on an unforgettable journey.
        Start your adventure today!`,
  },
];

export const services = [
  {
    title: "Environmental tours",
    subTitle:
      "Jordan offers a captivating blend of natural beauty and historical significance, making it a top destination for eco-tourism and cultural exploration. From the vast desert landscapes of Wadi Rum to the serene waters of the Dead Sea, visitors can experience diverse ecosystems and unique geological formations.",
    img: nature,
  },
  {
    title: "Historical experience",
    subTitle:
      "Jordan is a land rich in history, offering remarkable experiences for travelers. Explore Petra, the ancient rose-red city carved into rock, and discover the Roman ruins of Jerash, one of the best-preserved ancient cities.",
    img: historical,
  },
  {
    title: "Cultural experience",
    subTitle: "Jordan offers a rich cultural experience, from exploring the ancient ruins of Petra to experiencing the vibrant traditions of Bedouin hospitality. Discover the lively streets of Amman, where modern life meets historical landmarks, and enjoy the traditional music, dance, and crafts that reflect the country's diverse heritage.",
    img: cultural ,
  }
];

export const locations = [
  {
    title: "WADI RUM" , 
    img: WadiRum,
    desc: `a popular destination for adventure seekers, offering activities like camel trekking,
    rock climbing, and stargazing under some of the clearest night skies in the world.` ,
    price: "99.99",
    days: "3"
  } ,
  {
    title: "DEAD SEA" ,
    img: DeadSea,
    desc: `a unique saltwater lake known for being the lowest point on Earth at 430 meters below sea level.
    The mineral-rich mud and buoyant waters are popular for relaxation and skin treatments.`,
    price: "79.99",
    days: "4"
  },
  {
    title: "PETRA" ,
    img: Petra ,
    desc: `Petra is a UNESCO World Heritage Site and one of the New Seven Wonders of the World,
    attracting visitors with its rich history, intricate architecture, and stunning desert surroundings.`,
    price: "120.00",
    days: "2"
  },
  {
    title: "AQABA" ,
    img: Aqaba,
    desc: `Aqaba is a vibrant coastal city in southern Jordan, located on the Red Sea. Known for its warm climate and crystal-clear waters,
    it is a popular destination for diving, snorkeling, and beach activities.`,
    price: "150.00",
    days: "3"
  },
]

export const AboutImg = [About1 , About2];
export const aboutText = [

  {
    text1:`We are a group of passionate university students dedicated to showcasing the beauty and heritage of Jordan.
    Our mission is to connect people with the rich culture, stunning landscapes,
    and warm hospitality that make Jordan a must-visit destination.` ,
    text2: `As students, we bring fresh perspectives and creative ideas to the tourism industry,
    leveraging our academic knowledge and personal experiences.
    Our project is driven by the belief that travel is not just about visiting places—it's about creating memories,
    embracing cultures,
    and fostering a deeper understanding of the world around us.` 
  }
]

export const petra = petraBackGround;
