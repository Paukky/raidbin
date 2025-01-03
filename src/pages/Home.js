import React from "react";
import HeroImage from "../heroraid2.png"; // Make sure this path is correct
import Cards from "../components/Cards";
const Home = () => {
  return (
    <React.Fragment>
      <div className="relative w-full h-screen">
        <img
          src={HeroImage}
          alt="Hero"
          className="object-cover w-full h-full opacity-20"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center mt-10 md:m-auto">
          <h1 className="text-4xl font-bold text-white text-center hidden sm:block">
            Welcome to Raidbin
          </h1>
          <p className="mt-4 text-lg text-white hidden sm:block">
            Your one hub for all NA PF Strats
          </p>
          <Cards/>
        </div>
      </div>

      {
        //TODO: ADD Ulti Section
        /* <div className='bg-primary-50 py-5'>
        <p className='text-center font-heading text-primary-950 text-4xl mb-10'> Why I made this website?</p>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-4 w-full max-w-5xl mx-auto'>
          <div className='container'>
            <img src={Tabs} alt="Multiple Tabs Icon" className='max-w-md md:max-w-lg'/>
          </div>
          <div className='text-primary-950 text-center p-4'>
            <span className='text-2xl '>I made this website as a hub for all PF strats.</span> I find it concerning where one link led to a pastebin then it leads into a toolbox. 
          </div>
        </div>
      </div> */
      }
    </React.Fragment>
  );
};

export default Home;
