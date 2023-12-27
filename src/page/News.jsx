import img18 from '../assets/image 18.png';
import img19 from '../assets/image 19.png';

const CardNews = ({ src, date, description, navigasi }) => {
  return (
    <div className="w-[450px] mb-5 md:mb-0  mx-auto hover:scale-105 transition duration-300">
      <img src={src} alt="" />
      <div>
        <p className="font-amiko text-[16px] mb-[13px]">{date}</p>
        <p className="font-amiko text-[21px]">{description}</p>
        <p className="font-amiko text-[18px]">{navigasi}</p>
      </div>
    </div>
  );
};

const News = () => {
  return (
    <section className="flex flex-col md:flex-row justify-start md:justify-center md:mx-0 mx-auto text-center md:text-start gap-5 mb-20 ">
      <div className="">
        <p className="font-murecho text-[52px] mb-[35px]">See our inside news & editorials</p>
        <p className="text-[19px] font-amiko mb-[31px]">Designed by bagbery, with premium, durable and environmentally friendly materials</p>
        <button className="text-center font-amiko text-white text-[20px] w-[231px] h-[53px] bg-[#DF6724] rounded-[30px] hover:bg-[#f5a276] transition duration-300">Explore out blog</button>
      </div>
      <CardNews src={img18} date={'March 1, 2023'} description={'Elevate your style with our luxurious handbags'} navigasi={'Continue reading'} />
      <CardNews src={img19} date={'March 1, 2023'} description={'Upgrade your handbag collection with our designer styles'} navigasi={'Continue reading'} />
    </section>
  );
};

export default News;
