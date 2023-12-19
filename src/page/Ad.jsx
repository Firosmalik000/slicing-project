import React from 'react';
import img14 from '../assets/image 14.png';
import img15 from '../assets/image 15.png';
import img16 from '../assets/image 16.png';
import arrow from '../assets/arrow.svg';

const Ad = () => {
  return (
    <section className="relative mb-20 w-5/6 mx-auto">
      <img src={img14} alt="" className="w-[689px] h-[729px] absolute top-[168px]" />
      <img src={img15} alt="" className="absolute left-[480px] top-[458px] " />
      <img src={img16} alt="" className="absolute right-0 top-[378px] w-[392px] h-[396px]" />
      <div className="absolute right-1 md:right-[147px] w-[600px]  md:w-[430px] md:top-0 top-[300px] ">
        <p className="font-anybody text-[45px] mb-[40px] text-white md:text-black">Complate your dazzling look with our collections</p>
        <button className="w-[277px] h-[51px] bg-[#DF6724] text-white rounded-[30px] flex items-center px-8 justify-start hover:bg-[#f8af88] transition duration-300">
          Go to collcetions <img src={arrow} alt="" className="ml-4" />
        </button>
      </div>
    </section>
  );
};

export default Ad;
