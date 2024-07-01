import React from 'react';
import './FindOut.css';

const FindOut = () => {
    return (
        <div className='my-28'>
            <div className='w-[85%] mx-auto bg-[#2d2640] p-16 flex flex-col lg:flex-row justify-between items-center find-out-background'>
                <h1 className='font-dmSerif text-[40px] lg:text-[65px] text-white leading-[40px] lg:leading-[70px] text-center lg:text-left'>
                    Find out more <br /> about how we work
                </h1>
                <button className='px-8 py-2 bg-[#2d2640] text-white font-semibold border border-white text-[15px] hover:bg-white hover:text-[#2d2640] font-karla transition-colors duration-300 mt-6 cursor-pointer'>
                    How We Work
                </button>
            </div>
        </div>
    );
};

export default FindOut;
