// ButtonComponent.js
"use client"
import React from 'react';

const ButtonComponent = ({  buttonText }) => {
  return (
    <div className='pt-5'>
      <button
        type="submit"
        className="bg-black text-white py-2 px-4 rounded-md w-[456px] h-[56px]"
      >
        <p className='text-center'>{buttonText}</p>
      </button>
    </div>
  );
};

export default ButtonComponent;
