import React from 'react';
import tvImage from '/src/assets/tv.png';
import computerImage from '/src/assets/computer.png'
import mobileImage from '/src/assets/mobile.png'
import controllerImage from '/src/assets/controller.png'
import EachDevice from './EachDevice';


const AvailableDevices = () => {
    const tvDevices = ["Amazon Fire TV", "Android TV devices", "Apple TV", "Chromecast", "LG TVs", "Samsung", "MagentaTV" ,"Stick", "Panasonic"]
    const computerDevices = ["Chrome OS", "MacOS", "Windows PC"]
    const mobileDevices = ["Amazon Fire Tablets", "Android Phones & Tablets", "iPhone & iPad"]
    const gamingDevices = ["PS4", "PS5", "Xbox One", "Xbox Series X", "Xbox Series S"]



  return (
    <div className='mt-32 w-10/12 mx-auto'>
        <h3 className='text-4xl text-white font-bold text-center mb-20 items-center w-10/12 mx-auto'>Available on your favorite devices</h3>

        <div className='grid grid-rows-1 grid-flow-row md:grid-rows-2 md:grid-flow-col lg:grid-rows-1'>
        <EachDevice img={tvImage} title="TV" devices={tvDevices} />
        <EachDevice img={computerImage} title="Computer" devices={computerDevices} />
        <EachDevice img={mobileImage} title="Mobile & Tablet" devices={mobileDevices} />
        <EachDevice img={controllerImage} title="Game Consoles" devices={gamingDevices} />
    

      </div>


      </div>
  )
}

export default AvailableDevices
