import img14 from '../assets/image 14.png';
import img15 from '../assets/image 15.png';
import img16 from '../assets/image 16.png';
import arrow from '../assets/arrow.svg';

const Ad = () => {
  return (
    <section className="relative mb-20 w-5/6 mx-auto">
      <img src={img14} alt="" className="w-[689px] h-[729px] absolute top-[168px]" />
      <img src={img15} alt="" className="absolute md:left-[480px] right-0 top-[458px] " />
      <img src={img16} alt="" className="absolute right-0 top-[378px] w-[392px] h-[396px]" />
      <div className="absolute text-center md:text-left md:right-[107px] w-full  md:w-[430px] md:top-0 top-[500px] ">
        <p className="font-anybody md:text-[40px] text-[30px] mb-[40px] md:font-semibold font-bold text-white md:text-black">Complate your dazzling look with our collections</p>
        <button className="w-[277px] h-[51px] bg-[#DF6724] text-white rounded-[30px] flex items-center px-8 justify-start hover:bg-[#f8af88] transition duration-300 mx-auto md:mx-0">
          Go to collcetions <img src={arrow} alt="" className="ml-4" />
        </button>
      </div>
    </section>
  );
};

export default Ad;
