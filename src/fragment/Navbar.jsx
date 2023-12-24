import React, { useEffect, useState } from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { RiAccountCircleLine } from 'react-icons/ri';
import { CiMenuBurger } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const InputCustom = (active) => {
  return (
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
  );
};
const Navbar = () => {
  const [active, setActive] = useState(false);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={` ${active ? 'shadow-lg bg-white ' : 'text-white border-b border-slate-100'} transition duration-300 py-[35px]  w-full  fixed z-[9999]    `}>
      <div className="flex justify-between items-center mx-auto w-5/6">
        <AnchorLink href={'#hero'}>
          <div>
            <button className="font-newsreader text-[40px] font-semibold">Bagberry</button>
          </div>
        </AnchorLink>

        <div className={`md:flex gap-[30px] font-anybody text-xl font-semibold hidden text-center gap-x-[60px]`}>
          <button className=" hover:-translate-y-2  transition duration-300">Home</button>
          <button className=" hover:-translate-y-2  transition duration-300">Shop</button>
          <button className=" hover:-translate-y-2  transition duration-300">LookBook</button>
          <button className=" hover:-translate-y-2  transition duration-300">Pages</button>
          <button className=" hover:-translate-y-2  transition duration-300">Blog</button>
        </div>
        <div className={`md:flex gap-4  hidden`}>
          <InputCustom active={active} />
          <FiShoppingBag className="text-5xl cursor-pointer hover:-translate-y-2 transition duration-300" />
          <RiAccountCircleLine className="text-5xl cursor-pointer hover:-translate-y-2 transition duration-300" />
        </div>
        <div className="md:hidden flex">
          <CiMenuBurger className="text-4xl   cursor-pointer" onClick={() => handleOpen()} />
        </div>
      </div>
      {/* smartphone */}
      <div className={`w-[300px] min-h-screen fixed bg-orange-600 top-0 right-0 flex flex-col px-4 py-[150px] gap-y-4 justify-start ${open ? 'translate-x-0' : 'translate-x-full'} transition duration-300 text-white text-2xl font-anybody `}>
        <button className=" hover:-translate-y-2  transition duration-300">Home</button>
        <button className=" hover:-translate-y-2  transition duration-300">Shop</button>
        <button className=" hover:-translate-y-2  transition duration-300">LookBook</button>
        <button className=" hover:-translate-y-2  transition duration-300">Pages</button>
        <button className=" hover:-translate-y-2  transition duration-300">Blog</button>
        <InputCustom active={active} />
        <div className="mx-auto flex gap-x-4">
          <FiShoppingBag className="text-5xl hover:-translate-y-2  transition duration-300" />
          <RiAccountCircleLine className="text-5xl hover:-translate-y-2  transition duration-300" />
        </div>

        <IoMdClose className="absolute text-4xl right-4 top-4 btn cursor-pointer" onClick={() => handleOpen()} />
      </div>
    </div>
  );
};

export default Navbar;
