import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center md:justify-between md:items-start gap-24 px-8 py-12 ">
      <div className="text-center md:text-left">
        <p className="text-2xl mb-4 font-semibold font-newsreader">Bagberry</p>
        <p className="text-md mb-6 font-amiko">Our timeless bag collections for daily & occasional use at affordable prices</p>
        <div className="border border-[#EBDECD] h-0.5 w-full mb-6 md:w-[482px] md:mb-12"></div>

        <div className="flex flex-col md:flex-row w-full mb-8">
          <div className="w-full md:w-[50%] mb-4 md:mb-0">
            <p className="mb-2 text-md font-amiko">Email Us</p>
            <p className=" mb-2 font-amiko">yourmail@mail.com</p>
            <p className=" font-amiko">+1234567890</p>
          </div>
          <div className="w-full md:w-[50%]">
            <p className="mb-2 text-md">Follow Us</p>
            <div className="flex gap-4 md:justify-start justify-center">
              <FaFacebook className="text-2xl hover:scale-110 transition duration-300 cursor-pointer" />
              <FaInstagram className="text-2xl hover:scale-110 transition duration-300 cursor-pointer" />
              <FaTwitter className="text-2xl hover:scale-110 transition duration-300 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center md:justify-between gap-x-2 md:mx-0 mx-auto text-center md:text-left w-full">
        <div className="mb-8 md:mb-0">
          <p className="mb-4 text-[17px] font-amiko ">Our Shop</p>
          <p className="mb-2 hover:scale-105 cursor-pointer">Terms & Policy</p>
          <p className=" mb-2 hover:scale-105 cursor-pointer">Contact us</p>
          <p className=" mb-2 hover:scale-105 cursor-pointer">Gift cards</p>
          <p className=" mb-2 hover:scale-105 cursor-pointer">Offers & Promotions</p>
          <p className=" mb-2 hover:scale-105 cursor-pointer">Stores & Opening Hours</p>
          <p className=" mb-2 hover:scale-105 cursor-pointer">Size Chart</p>
        </div>

        <div className="mb-8 md:mb-0 w-[150px] mx-auto md:mx-0">
          <p className="text-[17px] mb-4 font-amiko ">Useful Links</p>
          <p className=" mb-2 hover:scale-105 cursor-pointer">Our brands</p>
          <p className=" mb-2 hover:scale-105 cursor-pointer">Career</p>
          <p className=" mb-2 hover:scale-105 cursor-pointer">About us</p>
          <p className=" mb-2 hover:scale-105 cursor-pointer">Campaigns</p>
        </div>

        <div>
          <p className="text-[17px] mb-4">Store Location</p>
          <p className=" mb-2 hover:scale-105 cursor-pointer">312, Awesome Street, Chennai, Tamilnadu, United Kingdom</p>
          <p className=" mb-2 hover:scale-105 cursor-pointer">312, Awesome Street, Chennai, Tamilnadu, United Kingdom</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
