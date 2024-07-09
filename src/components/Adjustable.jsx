import React from 'react';
import responsiveImg from '/src/assets/original.jpeg';
import parentalControls from '/src/assets/Group 2.png';
import entertainment from '/src/assets/Group 3.png';
import responsiveScreens from '/src/assets/Group 4.png'
import FeatureCard from './FeatureCard';


const Adjustable = () => {
  return (
    <div className='mt-32 w-10/12 mx-auto'>
        <h2 className='text-4xl text-white text-center'>Watch the way you want</h2>
        <p className='text-lg text-gray-300 text-center mt-4'>Enjoy the world's greatest stories - anytime, anywhere.</p>
        <div className='w-full mx-auto mt-20'>
            <img src={responsiveImg} alt="showcasing screen responsivness" />
        </div>
      
      <div className='w-10/12 mt-20 flex flex-col gap-10 mx-auto text-center md:flex-row    '>
        <FeatureCard img={entertainment} title="Endless entertainment" text="Explore thousands of hours of TV series, movies and originals."/>
        <FeatureCard img={responsiveScreens} title="Available on your favourite devices" text="Stream on up to four screens at once on compatible devices."/>
        <FeatureCard img={parentalControls} title="Easy-to-use parental controls" text="Keep your family safe with our intuitive parental controls."/>



      </div>
    </div>
  )
}

export default Adjustable
