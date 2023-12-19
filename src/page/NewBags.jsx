import React from 'react';
import image12 from '../assets/44 1.png';
import image134 from '../assets/44 2.png';
import image133 from '../assets/44 3.png';
import image132 from '../assets/44 4.png';

const Bag = ({ src, title, price }) => {
  return (
    <div className=" my-5    relative hover:scale-105  transition duration-300  ">
      <img src={src} alt="" className="  hover:shadow-2xl w-full" />
      <div className="absolute flex justify-between mx-8 w-5/6 bottom-5  ">
        <p className="font-amiko text-[16px] w-[60%]">{title}</p>
        <div className="font-amiko text-[16px] w-[40%] flex justify-end relative">
          <p className="absolute bottom-0">{price}</p>
        </div>
      </div>
    </div>
  );
};

const NewBag = () => {
  return (
    <section className="relative  py-[81px]">
      <div className="flex justify-between">
        <h1 className="text-[25px] font-amiko  ">New bags for all your occasions</h1>
        <p className="font-amiko text-[16px]">Explore all bags</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-3 md:gap-y-3 sm:gap-y-3 xs:gap-y-3 mx-auto  ">
        <Bag src={image12} title={'Large Webbing Purse'} price={'$89.00'} />
        <Bag src={image134} title={'Double Handle Large Backpack Blue'} price={'$129.00'} />
        <Bag src={image133} title={'Triple Compartment Cross- bady Bag Black'} price={'$149.00'} />
        <Bag src={image132} title={'Sandra Grab Bag'} price={'$129.00'} />
      </div>
    </section>
  );
};

export default NewBag;
