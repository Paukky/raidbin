import React from 'react';
import Navbar from '../components/Navbar';
import HeroImage from '../heroraid.png'; // Make sure this path is correct

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className='relative w-full h-screen'>
        {/* Hero Image */}
        <img src={HeroImage} alt="Hero" className='object-cover w-full h-full opacity-20' />

        {/* Overlay Text */}
        <div className='absolute inset-0 flex flex-col justify-center items-center'>
          <h1 className='text-4xl font-bold text-white text-center'>Welcome to Raidbin</h1>
          <p className='mt-4 text-lg text-white'>
            Your one hub for all PF Strat Needs
          </p>
          <div>
          <button className='mt-6 px-4 py-2 mx-2 bg-background-500 text-white rounded-md'>
            M1S
          </button>
          <button className='mt-6 px-4 py-2 mx-2 bg-background-500 text-white rounded-md'>
            M2S
          </button>
          <button className='mt-6 px-4 py-2 mx-2 bg-background-500 text-white rounded-md'>
            M3S
          </button>
          <button className='mt-6 px-4 py-2 mx-2 bg-background-500 text-white rounded-md'>
            M4S
          </button>
          </div>
          <p>I'm tired of multiple pastebin being listed and distributed in various links. I decided to make this website as a hub for all PF strats</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;