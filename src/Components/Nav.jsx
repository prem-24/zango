// import { Menu, X } from "lucide-react";
// import { useState } from "react";
// import logo from "../assets/logo.png";
import './Nav.css'
import { navItems } from "../constants";
import logo from "../asset/Zango.svg"
import NavBtn from './NavBtn';
const Nav = () => {
//   const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

//   const toggleNavbar = () => {
//     setMobileDrawerOpen(!mobileDrawerOpen);
//   };

  return (
    <nav className="mt-10 sticky mx-auto top-10  z-50 w-4/5 rounded-xl py-3 backdrop-blur-lg border border-neutral-700/80">
      <div className="container px-4 mx-auto  relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-15 w-15 mr-2" src={logo} alt="Logo" />
           
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 text-white">
            {navItems.map((item, index) => (
              <li key={index} className="hover:text-myBtn nav-item ">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
          
            <a
              href="#"
             
            >
              <NavBtn/>
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            {/* <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button> */}
          </div>
        </div>
        {/* {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Create an account
              </a>
            </div>
          </div>
        )} */}
      </div>
    </nav>
  );
};

export default Nav;
