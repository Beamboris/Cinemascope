import React from 'react'

const EachDevice = ({title, devices, img}) => {
    const devicesLoaded = devices.map((device, index) => <li className='text-gray-400 text-center text-base' key={index}>{device} </li>)

  return (
    <div className='flex flex-col gap-2 mb-5'>
    <div className=' mx-auto flex justify-center items-center'>
    <img className="mx-auto h-[200px] lg:h-[150px]" src={img} alt="device image" />
    </div>
      <p className='text-white font-semibold text-2xl text-center'>{title}</p>
      <ul>
        {devicesLoaded}
      </ul>
    </div>
  )
}

export default EachDevice
