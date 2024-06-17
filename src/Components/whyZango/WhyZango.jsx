import Layout from "../Layout/Layout"
import PrimaryButton from "../PrimaryButton"
import SecButton from "../SecButton"
import GradientHeading from "../Subcomponents/GradientHeading"
import Tags from '../Subcomponents/Tags'
import TabButton from "../TabButton"

function WhyZango() {
  return (
   <Layout>

   <GradientHeading name="Why Zango is Your Top Choice?" className="py-20"/>

    <div className="cont h-screen w-full my-4flex flex-col justify-between rounded-custom bg-myBtn">
      <div className="tab1 border-t border-r border-l border-neutral-700/80 rounded-tl-custom rounded-tr-custom h-7h bg-myBtn">
      <div className="top-div flex justify-around items-center">
      <div className="top-tab-1 ">
      <Tags
         version="2.11V is live" 
      
        linkText="New Features!" />
      </div>
      <div className="top-tab-2">
<p className="text-white hidden md:block">Proprietary Platforms</p>
      </div>
      <div className="top-tab-3">
        <p className="text-white hidden md:block">Web Frameworks</p>
        
        </div>
        <div className="top-tab-4">
         <p className="text-white hidden md:block">Low-Code Platforms</p>
        
        </div>
        <div className="top-tab-5">
            <p className="text-white hidden md:block">Zango</p>
        
        </div>
      </div>
      
      </div>
      <div className="tab2 h-4/5 bg-black flex flex-col py-12">
      <div className="tab2-inner-1 bg-tabbtn py-6 flex justify-between px-12 items-center rounded-xl w-4/5 m-auto">
        <TabButton name="Development Speed"/>
        <p className=" text-gray-500 hidden md:block">Medium</p>
        <p className="text-gray-500 hidden md:block">Slow</p>
        <p className="text-white hidden md:block">Fast</p>
        <p className="text-white hidden sm:block">Fast</p>

      </div>
      <div className="tab2-inner-1 bg-tabbtn py-6 flex justify-between px-12 items-center rounded-xl w-4/5 m-auto">
        <TabButton name="Development Speed"/>
        <p className="text-white hidden md:block">Medium</p>
        <p className="text-white hidden md:block">Slow</p>
        <p className="text-gray-500 hidden sm:block">Fast</p>
        <p className="text-white hidden md:block">Fast</p>

      </div>
      <div className="tab2-inner-1 bg-tabbtn py-6 flex justify-between px-12 items-center rounded-xl w-4/5 m-auto">
        <TabButton name="Development Speed"/>
        <p className="text-gray-500 hidden md:block">Medium</p>
        <p className="text-white hidden md:block">Slow</p>
        <p className="text-gray-500 hidden sm:block">Fast</p>
        <p className="text-white hidden md:block">Fast</p>

      </div>
      <div className="tab2-inner-1 bg-tabbtn py-6 flex justify-between px-12 items-center rounded-xl w-4/5 m-auto">
        <TabButton name="Development Speed"/>
        <p className="text-gray-500 hidden sm:block">Medium</p>
        <p className="text-white hidden md:block">Slow</p>
        <p className="text-gray-500 hidden md:block">Fast</p>
        <p className="text-white hidden md:block">Fast</p>

      </div>
      <div className="tab2-inner-1 bg-tabbtn py-6 flex justify-between px-12 items-center rounded-xl w-4/5 m-auto">
        <TabButton name="Development Speed"/>
        <p className="text-gray-500 hidden md:block">Medium</p>
        <p className="text-gray-500 hidden md:block">Slow</p>
        <p className="text-white hidden md:block">Fast</p>
        <p className="text-white hidden sm:block">Fast</p>

      </div>

    
      
      </div>
      <div className="tab1 border-b border-r border-l border-neutral-700/80 rounded-bl-custom rounded-br-custom h-7h  bg-myBtn"></div>
    </div>
   </Layout>
  )
}

export default WhyZango
