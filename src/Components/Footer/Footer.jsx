
import Logo from "../../asset/Zango.svg"
import foot1 from "../../asset/footer/foot1.svg"
import foot2 from "../../asset/footer/foot2.svg"
import foot3 from "../../asset/footer/foot3.svg"
function Footer() {
  return (

    <div className="footer  border-t border-neutral-700/80 flex flex-col md:flex-row justify-between p-16">
   <div className="footinner1 py-10 md-py4 flex flex-col gap-4 justify-center">
    <img className="w-28" src={Logo} alt="" />
    <p className="text-white hover:text-myBtn nav-item">@ 2024 Healthlane Technologies pvt. Ltd</p>
   </div>
   <div className="footinner2 flex flex:col  md:flex-row gap-16">
   <div className="sec1 flex flex-col gap-4">
    <h1 className="text-lg font-bold text-white">RESOURCES</h1>
    <p className="text-base  ps-2 font-normal text-white hover:text-myBtn nav-item">Docs</p>
    <p className="text-base ps-2 font-normal text-white hover:text-myBtn nav-item">Blog</p> 
   </div>
   <div className="sec2 ">
    <h1 className="text-lg font-bold text-white">CHANNELS</h1>
    <div className="images flex flex-row gap-6 pt-4">
        <div className="  logo1 w-8 h-8 flex justify-center items-center ">
            <img className="" src={foot1} alt="" />
        </div>
        <div className="logo1 w-8 h-8 flex justify-center items-center ">
            <img src={foot2} alt="" />
        </div>
        <div className="logo1 w-8 h-8 flex justify-center items-center ">
            <img src={foot3} alt="" />
        </div>
        
    </div>
   </div>
   </div>
    </div>

  )
}

export default Footer
