import React from 'react';
import vogue from '../assets/vogue.png';
import marie from '../assets/marie.png';
import glamour from '../assets/glamour.png';

const Testimonial = () => {
  return (
    <section className="bg-[#EEEFE6A1] mb-20 w-full min-h-[469px] py-[98px] ">
      <p className="font-amiko text-[19px] text-center mb-[12px]">Testimonials by famous magazines</p>
      <p className="font-murecho text-[46px] text-center mb-[67px]">The most beautifully designed handbags ever.”</p>
      <div className="md:w-[700px] w-[400px] mx-auto h-0.5 border border-[#EBDECD] mb-[60px]"></div>
      <div className=" flex md:flex-row flex-col  justify-center max-w-[1000px]   mx-auto">
        <img src={vogue} alt="" className="w-[154px] mx-auto" />
        <img src={glamour} alt="" className="w-[154px] mx-auto" />
        <img src={marie} alt="" className="w-[154px] mx-auto" />
      </div>
    </section>
  );
};

export default Testimonial;
