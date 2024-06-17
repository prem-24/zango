import { FeatureItems } from "../../constants"
import Layout from "../Layout/Layout"
import FeaturesCard from "../Subcomponents/FeaturesCard"
import GradientHeading from "../Subcomponents/GradientHeading"


function FeaturesBox() {
  return (
   <Layout>
    <div className="py-20">
    <GradientHeading name=" Build Anything with Zango: What's Your Next Project?" className="lg:xl:w-1/2 mx-auto "/>
    </div>

    <div className='grid  sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 justify-center md:lg:xl:justify-between items-center'>
      {
        FeatureItems.map((Items)=>(

           < FeaturesCard key={Items.index} head ={Items.head} content={Items.content} FeatureIcons = {Items.featureIcon}/>

        ))
      }
    </div>
   </Layout>
  )
}

export default FeaturesBox
