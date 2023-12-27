import img17 from '../assets/image 17.png';

const HandBag = () => {
  return (
    <section className="px-4 md:px-8 lg:px-12 xl:px-20 py-10 md:py-20 flex flex-col md:flex-row items-center gap-4 md:gap-8 relative">
      <img src={img17} alt="" className="w-full md:w-[50%] xl:w-[40%] h-auto" />
      <div className="relative text-center md:text-left max-w-md md:max-w-[50%] xl:max-w-[60%]">
        <h1 className="font-murecho text-3xl md:text-5xl text-white mb-4 md:mb-8">
          Our handbag styles are <br /> the ultimate indulgence
        </h1>
        <p className="font-amiko text-base md:text-md mb-4 md:mb-8 text-white">Sitting comfortably round the waist, it fastens with a buckle clip on an adjustable strap</p>
        <button className="w-full md:w-[70%] lg:w-[50%] bg-white text-[#DF6724] h-12 md:h-16 rounded-2xl hover:bg-[#ffb790] hover:text-white transition duration-300">Go to crossbody bags</button>
      </div>
    </section>
  );
};

export default HandBag;
