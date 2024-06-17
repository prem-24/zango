import FeaturesBox from "./Components/Features/FeaturesBox";
import Hero from "./Components/HeroSec/Hero";
import Nav from "./Components/Nav";
import Side from "./Components/SideSec/Side";
import { BentoGridDemo } from "./Components/Bento/Grid";
import LogoCompo from "./Components/LogoComponent/LogoCompo";
import { MaskContainer } from "./Components/mask/svg-mask-effect";
import Footer from "./Components/Footer/Footer";
import WhyZango from "./Components/whyZango/WhyZango";
// import { InfiniteMovingCards, items } from "./Components/Infinite scrool/infinitescrol";



const children = "Build Robust Business Applications Effortlessly with Zango"
const reveal ="Empower your web development journey effortlessly with Zango – simplifying and streamlining your website build process from start to finish!"
function App() {
  return (
    <div className="bg-myPrimary w-full h-auto p-1">
      <Nav />
      <Hero />
      <LogoCompo />
      <Side />
      <FeaturesBox />
      <BentoGridDemo />
    
      <WhyZango/>
      <MaskContainer
        children = {children}
        revealText = {reveal}
        size = " 10 md:30"
  revealSize = "300"
  className=""
      />
      <Footer/>
    </div>
  );
}

export default App;
