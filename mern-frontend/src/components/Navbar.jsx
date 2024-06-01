/* eslint-disable no-unused-vars */

import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { FaBlog, FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [, setIsSticky] = useState(false);

  // toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[]);

  const navItems = [
    {link : "Home",  path:"/"},
    {link : "About",  path:"/about"},
    {link : "Shop",  path:"/Shop"},
    {link : "Sell Your Book",  path:"/admin/dashboard"},
    {link : "blog",  path:"/blog"},
  ]
  return <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
    <nav className={`py-4 1g:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""}`}>
      <div className="flex justify-between items-center text-base gap-8">
        <Link to="/" className="text-2xl font-bold flex gap-2 items-center text-blue-700"><FaBlog className="inline-block"/>Books</Link>

        <ul className=" md:flex hidden space-x-12">
          {
            navItems.map(({link,path})=> <Link to = {path} className="block uppercase text-base cursor-pointer hover:text-blue-700 ">{link}</Link>)
          }
        </ul>

            <div className="space-x-12 hidden lg:flex items-center">
              <button><FaBarsStaggered className= "w-5  hover:text-blue-700 "/></button>
            </div>

              <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none text-black">
                    {
                    isMenuOpen ? <FaXmark className='h-5 w-5 ◎text-black'/> 
                    :<FaBarsStaggered className='h-5 w-5 text-black' />
                    }
                    </button>
              </div>
      </div>

      <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}` }>
        {
          navItems.map(({link, path}) => <Link key={path} to={path} className='block text-base
          text-white uppercase cursor-pointer'>{link}</Link> )
          }
        </div>

    </nav>
  </header>;
};

export default Navbar;
