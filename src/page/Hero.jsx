import hero from '../assets/hero.png';

const Hero = () => {
  return (
    <div className="relative w-full mb-[100px]" id="hero">
      <img src={hero} alt="" className="min-w-[210vh] min-h-screen" />
      <div className="absolute top-[400px]  left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className=" text-5xl md:text-8xl text-white text-center mb-5 font-anybody">
          Our timeless bag <br />
          collections
        </h1>
        <p className="text-base md:text-xl text-white text-center mb-10 font-anybody">
          Designed for the way you live your life. Bagberry are <br /> beautiful in their simplicity
        </p>
        <button className="btn mx-auto flex justify-center py-3 rounded-[20px] text-white font-semibold w-[200px] md:w-[250px] bg-[#DF6724] hover:bg-[#ffab7e] transition duration-300 font-amiko">Go to Shop</button>
      </div>
    </div>
  );
};

export default Hero;
