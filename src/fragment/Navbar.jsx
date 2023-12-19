import React, { useEffect, useState } from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { RiAccountCircleLine } from 'react-icons/ri';
import { CiMenuBurger } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={` ${active ? 'shadow-lg bg-white ' : 'text-white border-b border-slate-100'} transition duration-300 py-[35px]  w-full  fixed z-[9999]    `}>
      <div className="flex justify-between items-center mx-auto w-5/6">
        <div>
          <p className="font-newsreader text-[40px] font-semibold">Bagberry</p>
        </div>

        <div className="md:hidden">
          {showMenu ? <CiMenuBurger className="text-white text-2xl font-bold z-100 transition duration-700" onClick={toggleMenu} /> : <IoMdClose className="text-white text-2xl cursor-pointer transition duration-700" onClick={toggleMenu} />}
        </div>

        <div className={`md:flex gap-[30px] font-anybody text-xl font-semibold ${showMenu ? 'hidden' : ''}`}>
          <button className="ml-4">Home</button>
          <button className="ml-4">Shop</button>
          <button className="ml-4">LookBook</button>
          <button className="ml-4">Pages</button>
          <button className="ml-4">Blog</button>
        </div>
        <div className={`md:flex gap-4 ${showMenu ? 'hidden' : ''}`}>
          <form>
            <div className="relative">
              <input type="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-[30px]     " placeholder="Search " required />
              <button type="submit" className="text-white absolute end-2.5 bottom-2.5  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2">
                <svg className={`w-4 h-4 ${active ? 'text-black' : 'text-gray-400'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </button>
            </div>
          </form>
          <FiShoppingBag className="text-5xl" />
          <RiAccountCircleLine className="text-5xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
