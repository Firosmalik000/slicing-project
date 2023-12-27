import React from 'react';
import img11 from '../assets/1 1.png';
import img12 from '../assets/2 1.png';
import img13 from '../assets/3 13.png';

const Card = ({ src, title, subTitle }) => {
  return (
    <div className="md:w-[420px] hover:shadow-2xl relative hover:scale-105 transition-all duration-300">
      <img src={src} alt="" className="w-full h-full" />
      <div className="absolute bottom-5 left-5 ">
        <p className="font-amiko text-[20px]">{title}</p>
        <p className="font-amiko text-[16px]">{subTitle}</p>
      </div>
    </div>
  );
};

const Explore = () => {
  return (
    <section className=" w-5/6 mx-auto py-[81px] ">
      <div className="flex justify-between">
        <h1 className="font-amiko text-[20px] font-semibold mb-[19px] ">Explore our core bagberry</h1>
        <p className="font-amiko text-[16px] underline cursor-pointer hover:text-red-600">View all</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 md:gap-y-3 sm:gap-y-3 xs:gap-y-3 mx-auto">
        <Card src={img11} className="md:justify-self-center " title={'Makeup bags'} subTitle={'Go to makeup bags'} />
        <Card src={img12} className="md:justify-self-center" title={'Backpacks'} subTitle={'Go to backpacks'} />
        <Card src={img13} className="md:justify-self-center" title={'Cross body bags'} subTitle={'Explore cross body bags'} />
      </div>
    </section>
  );
};

export default Explore;
