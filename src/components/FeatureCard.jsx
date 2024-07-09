import React from 'react'

const FeatureCard = ({img, title, text}) => {
  return (
       <div>
            <img src={img} alt="feature-icon" className='mx-auto w-[100px]'/>
            <h3 className='text-xl text-white py-3 md:text-2xl lg:text-3xl'>{title}</h3>
            <p className='text-gray-400 text-base '>{text}</p>
        </div>
  )
}

export default FeatureCard
