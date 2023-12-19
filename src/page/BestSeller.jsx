import React from 'react';
import image12 from '../assets/image 12.png';
import image134 from '../assets/image 13 4.png';
import image133 from '../assets/image 13 3.png';
import image132 from '../assets/image 13 2.png';
import image13 from '../assets/image 13.png';

const Bag = ({ src, title, price }) => {
  return (
    <div className="w-[290px] h-[300px] bg-[#F2F2F2] relative hover:scale-105 transition hover:shadow-2xl duration-300  ">
      <img src={src} alt="" className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]" />
      <div className="absolute bottom-3 flex justify-between w-5/6 mx-6">
        <p className="w-[60%]">{title}</p>
        <div className="relative w-[40%] flex justify-end">
          <p className="absolute bottom-0">{price}</p>
        </div>
      </div>
    </div>
  );
};

const BestSeller = () => {
  return (
    <section className="relative mb-10">
      <h1 className="text-[25px] font-amiko mb-8">Bestselling bags</h1>
      <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-2 ">
        <Bag src={image12} title={'Large Webbing Purse'} price={'$89.00'} />
        <Bag src={image134} title={' Bella Clip Frame Purse'} price={'$189.00'} />
        <Bag src={image133} title={'Quilted Chain Shouder Bag Green'} price={'$89.00'} />
        <Bag src={image132} title={'Triple Compartment Cross-body Bag Green'} price={'$129.00'} />

        <div className="w-[290px] h-[300px] bg-[#EBDECD] relative hover:scale-105 hover:shadow-2xl transition duration-300 ">
          <img src={image13} alt="" className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]" />
          <div className="absolute bottom-3 flex justify-between w-5/6 mx-6">
            <p className="w-[60%]">Classic rafia cross- body bag</p>
            <div className="relative w-[40%] flex justify-end">
              <p className="absolute bottom-0">$129.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
