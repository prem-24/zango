import Layout from "../Layout/Layout";
import PrimaryButton from "../PrimaryButton";
import { side, videos } from "../../constants";
import { icons } from "../../constants";
import GradientHeading from "../Subcomponents/GradientHeading";

function Side() {
  return (
    <Layout>
      <div className="side-section-1">
        <GradientHeading
          name="Build your site in record time!"
          className="py-20"
        />

        <div className="side1 flex flex-col lg:xl:flex-row py-16 justify-between items-center">
          <img src={side.side1} alt="" className=" w-full lg:xl:w-1/2" />
          <div className="side1-leftCont  lg:xl:px-8 flex lg:xl:ps-20 flex-col gap-8  items-start">
            <h2 className="text-xl sm:text-2xl lg:text-4xl text-start tracking-wide  text-white font-bold lg:w-4/5 ">
              Experience the{" "}
              <span className="text-mySecondary">Fastest Development</span>
            </h2>
            <p className=" hero-para  text-base  lg:xl:text-xl text-white text-start">
              Achieve unmatched development speed with Zango. Built Django,
              Zango streamlines your workflow with pre-built modules and a
              robust package ecosystem, eliminating repetitive tasks.
            </p>
            <PrimaryButton name="Lear More" icon={icons.arrow} />
          </div>
        </div>
      </div>

      <div className="side-section-2">
        <div className="side2 flex flex-col-reverse lg:xl:flex-row  justify-between items-center">
        <div className="side2-leftCont  lg:xl:px-8 flex lg:xl:ps-20 flex-col gap-8  items-start">
            <h2 className="text-xl sm:text-2xl lg:text-4xl text-start tracking-wide  text-white font-bold lg:w-4/5 ">
              Experience the{" "}
              <span className="text-mySecondary">Fastest Development</span>
            </h2>
            <p className=" hero-para  text-base  lg:xl:text-xl text-white text-start">
              Achieve unmatched development speed with Zango. Built Django,
              Zango streamlines your workflow with pre-built modules and a
              robust package ecosystem, eliminating repetitive tasks.
            </p>
            <PrimaryButton name="Lear More" icon={icons.arrow} />
          </div>
          <div className="flex mt-10 h-full   justify-center">
            <video
              autoPlay
              loop
              muted
              src={videos.video1}
              className="rounded-xl w-customVid  border-mySecondary shadow-sm shadow-mySecondary mx-2 my-4"
            >
              <source src="video1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

         
        </div>
      </div>
    </Layout>
  );
}

export default Side;
