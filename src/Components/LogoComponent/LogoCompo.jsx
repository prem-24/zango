import Layout from '../Layout/Layout'

import { InfiniteMovingCards, items } from '../Infinite scrool/infinitescrol'

function LogoCompo() {
  return (
 <Layout>

    <div className="logoSec pt-16">
        <h1 className='text-white text-base md:text-xl text-center'> Powering  1000s  of Top Global Applications</h1>
        <div className="Logos mt-16 py-0 w-full flex flex-row border-t border-b border-gray-800 justify-between items-center ">
          <InfiniteMovingCards  items={items}
        direction="left"
        speed="normal"
        pauseOnHover={true}
        className="custom-class"/>
        </div>
    </div>
 </Layout>
  )
}

export default LogoCompo


// import { , items } from "./Components/Infinite scrool/infinitescrol";