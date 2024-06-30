import React from 'react';
import heroImg from "../assets/image-intro-desktop.jpg";

const Hero = () => {
    return (
        <div>
            <div className='h-[87vh] flex items-center bg-[#2d2640]'>
                <div className='w-[85%] mx-auto flex justify-between relative'>
                    <div className='textDiv w-[50%]'>
                        <hr className='w-[30%] mb-10'/>

                        <h1 className='font-dmSerif text-[70px] text-white leading-[70px]'>
                            Humanizing <br />
                            your insurance.
                        </h1>

                        <p className='font-karla text-[15px] text-white mt-6'>
                            Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.
                        </p>

                        <button className='px-8 py-2 bg-[#2d2640] text-white font-semibold border border-white text-[15px] hover:bg-white hover:text-[#2d2640] font-karla transition-colors duration-300 mt-6'>
                            View Plans
                        </button>
                    </div>


                    <div className='absolute right-0'>
                        <img src={heroImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;