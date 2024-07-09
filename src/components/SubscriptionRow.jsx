import React from 'react';

const SubscriptionRow = ({ title, standard, noAds, premium, underline, white }) => {
  return (
    <div className='flex flex-col gap-5 items-center text-center border-gray-600 border-b-[1px] md:flex-row md:justify-between'>
      <div>
        <p className='text-gray-400  pt-4 md:pt-0 md:max-w-[200px]'>{title}</p>
      </div>
      <div className='flex text-center gap-12 w-full md:w-2/3'>
        <p className={`w-1/3 py-8 text-lg text-gray-400 flex justify-center items-center`}>{standard}</p>
        <p className={`w-1/3 py-8 text-lg flex justify-center items-center ${underline && "underline"} ${white ? 'text-white' : 'text-gray-400'}`}>{noAds}</p>
        <p className={`w-1/3 py-8 text-lg md:bg-[#759AAB] md:bg-opacity-20 flex justify-center items-center text-white ${underline && "underline"}`}>{premium}</p>
      </div>
    </div>
  );
}

export default SubscriptionRow;
