import React from 'react';
import heroImg from "../assets/image-intro-desktop.jpg";
import rightPattern from "../assets/bg-pattern-intro-right-desktop.svg";
import leftPattern from "../assets/bg-pattern-intro-left-desktop.svg";

const Hero = () => {
    return (
        <div className='relative overflow-hidden'>
            <div className='h-fit lg:h-[87vh] flex items-center bg-[#2d2640] pb-6 lg:pb-0'>
                <div className='w-full lg:w-[85%] mx-auto flex gap-6 lg:gap-0 flex-col-reverse lg:flex-row justify-between relative'>
                    <div className='textDiv w-[80%] text-center lg:text-left mx-auto lg:mx-0 lg:w-[50%]'>
                        <hr className='w-[30%] mb-10 hidden lg:block' />

                        <h1 className='font-dmSerif text-[55px] lg:text-[70px] text-white leading-[70px]'>
                            Humanizing <br />
                            your insurance.
                        </h1>

                        <p className='font-karla text-[15px] text-white mt-6'>
                            Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.
                        </p>

                        <button className='px-8 py-2 bg-[#2d2640] text-white font-semibold border border-white text-[15px] hover:bg-white hover:text-[#2d2640] font-karla transition-colors duration-300 mt-6 cursor-pointer'>
                            View Plans
                        </button>
                    </div>

                    <div className='imgDiv lg:absolute right-0 top-0 overflow-hidden w-full lg:w-[50%]'>
                        <img src={heroImg} alt="Hero" className='w-full' />
                    </div>
                </div>
            </div>

            <div className='bg-white h-[60vh]'>
            </div>

            <div className='hidden lg:block absolute right-0 -top-[10%]'>
                <img src={rightPattern} alt="Right Pattern" />
            </div>

            <div className='absolute left-0 bottom-0 w-[15vw]'>
                <img src={leftPattern} alt="Left Pattern" className='w-full' />
            </div>

            <div className='w-[85%] mx-auto'>
                <hr className='w-[15%] border border-[#2d2640]' />
            </div>
        </div>
    );
};

export default Hero;
