import React from 'react';
import logo from "../assets/logo.svg"

const Navbar = () => {
    return (
        <div className='bg-white h-[13vh] w-full flex items-center z-50 overflow-hidden'>
            <div className='w-[85%] mx-auto flex justify-between items-center'>
                <div>
                    <img src={logo} alt="" />
                </div>

                <div className='flex items-center gap-6'>
                    <ul className='flex items-center text-[#837d87] font-karla gap-6 font-bold tracking-widest text-[15px]'>
                        <li className='cursor-pointer hover:text-[#2d2640] transition-colors duration-300'>How We Work</li>
                        <li className='cursor-pointer hover:text-[#2d2640] transition-colors duration-300'>Blog</li>
                        <li className='cursor-pointer hover:text-[#2d2640] transition-colors duration-300'>Account</li>
                    </ul>


                    <button className='px-8 py-2 text-[#2d2640] font-semibold border border-[#2d2640] text-[15px] hover:bg-[#2d2640] hover:text-white font-karla transition-colors duration-300'>
                        View Plans
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;