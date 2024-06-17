import Layout from "../Layout/Layout";
import SecButton from "../SecButton";
import { icons } from "../../constants/index";
import "./Hero.css";
import PrimaryButton from "../PrimaryButton";
import { videos } from "../../constants/index";
import Tags from "../Subcomponents/Tags";
// import bgGreen from "../../asset/bgimage/bggreen.svg"

function Hero() {
  return (
    <Layout>
      <div className="w-full h-auto pt-16">
        {/* Version tag */}
       <Tags
         version="2.11V is live" 
        message="Update" 
        linkText="What's new?" />

        {/* Hero content */}
        <div className="flex flex-col items-center mt-6 lg:mt-20">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide hero-head text-white font-bold lg:w-3/5 mt-6">
            The Modern Framework for
            <span className="bg-gradient-to-r text-mySecondary bg-clip-text">
              {" "}
              Business Applications
            </span>
          </h1>

          <p className="hero-para mt-10 text-xl text-white text-center lg:w-2/5">
            Zango is a Django-based web framework{" "}
            <span className="text-gray-400">
              designed to simplify the development of enterprise-ready business
              applications.
            </span>
          </p>

          <div className="hero-btns flex flex-row gap-6 justify-center my-12">
            <PrimaryButton
              icon={icons.arrow}
              name={"Get Started"}
              className="inline-block sm:hidden"
            />

            <SecButton
              icon={icons.copy}
              name={"zango start-project MyFirstProject"}
            />
          </div>
        </div>

        {/* Videos */}
        <div className="flex mt-10 h-full justify-center relative">
          {/* <img className=" hidden md:block w-1/2 -z-0 absolute  -top-36" src={bgGreen} alt="" /> */}
          <video
            autoPlay
            loop
            muted
            src={videos.video1}
            className="rounded-custom w-4/5 border-4 border-mySecondary shadow-sm shadow-mySecondary mx-2 my-4"
          >
            <source src="video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        
        </div>
      </div>
    </Layout>
  );
}

export default Hero;
