import BestSeller from './page/BestSeller';
import HandBag from './page/HandBag';
import Hero from './page/Hero';
import NewBag from './page/NewBags';
import News from './page/News';
import Testimonial from './page/Testimonials';
import Explore from './page/explore';
import img20 from './assets/image 20.png';
import Footer from './page/Footer';
import Navbar from './fragment/Navbar';
import Ad from './page/Ad';

function App() {
  return (
    <section className="App">
      <Navbar />

      <div>
        <Hero />
      </div>
      <div className="w-5/6 mx-auto mb-20">
        <BestSeller />
      </div>
      <div className="border border-[#EBDECD] h-0.1 w-5/6 mx-auto mb-[39px]"></div>
      <div className="min-h-[1240px] w-full  ">
        <Ad />
      </div>
      <div className="min-h-[700px] w-full bg-[#EEEFE6] ">
        <Explore />
      </div>
      <div className="min-h-[845px] w-full bg-[#DF6724] ">
        <HandBag />
      </div>
      <div className="w-5/6 mx-auto">
        <NewBag />
      </div>
      <div className="border border-[#EBDECD] h-0.1 w-5/6 mx-auto mb-20"></div>
      <div className="w-5/6 mx-auto">
        <News />
      </div>
      <div className="w-5/6 mx-auto">
        <Testimonial />
      </div>
      <div className="w-full mb-20">
        <img src={img20} alt="" className="w-full" />
      </div>
      <div className="w-5/6 mx-auto mb-20">
        <Footer />
      </div>
      <div className="border border-[#EBDECD] h-0.1 w-5/6 mx-auto mb-[39px]"></div>
      <p className="font-amiko text-[14px] text-center mb-[39px]">Copyright © AgniHD. 2023 All rights reserved.</p>
    </section>
  );
}

export default App;
