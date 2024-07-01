import React, { useState } from 'react';
import logo from "../assets/logo.svg";
import hamburgerIcon from "../assets/icon-hamburger.svg";
import closeIcon from "../assets/icon-close.svg";
import "./navbar.css";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleNavMenu = () => {
        setOpen(!open);
    };

    return (
        <div>
            <div className='bg-white h-[13vh] w-full flex items-center z-50 overflow-hidden'>
                <div className='w-[85%] mx-auto flex justify-between items-center'>
                    <div>
                        <img src={logo} alt="Logo" />
                    </div>

                    <div className='items-center gap-6 hidden lg:flex'>
                        <ul className='flex items-center text-[#837d87] font-karla gap-6 font-bold tracking-widest text-[15px]'>
                            <li className='cursor-pointer hover:text-[#2d2640] transition-colors duration-300'>How We Work</li>
                            <li className='cursor-pointer hover:text-[#2d2640] transition-colors duration-300'>Blog</li>
                            <li className='cursor-pointer hover:text-[#2d2640] transition-colors duration-300'>Account</li>
                        </ul>

                        <button className='px-8 py-2 text-[#2d2640] font-semibold border border-[#2d2640] text-[15px] hover:bg-[#2d2640] hover:text-white font-karla transition-colors duration-300'>
                            View Plans
                        </button>
                    </div>

                    <div onClick={handleNavMenu} className='lg:hidden cursor-pointer'>
                        <img src={open ? closeIcon : hamburgerIcon} alt="Menu Icon" />
                    </div>
                </div>
            </div>

            <div className={`bg-[#2b272f] h-[87vh] text-center font-karla text-white font-semibold text-[23px] menuDiv lg:hidden ${open ? 'block' : 'hidden'} transition-all duration-300`}>
                <ul className='w-full p-6'>
                    <li className='w-full px-6 py-4 cursor-pointer'>How We Work</li>
                    <li className='w-full px-6 py-4 cursor-pointer'>Blog</li>
                    <li className='w-full px-6 py-4 cursor-pointer'>Account</li>
                </ul>

                <button className='text-white bg-transparent border border-white hover:bg-white hover:text-[#2b272f] w-[70%] mx-auto py-2'>
                    VIEW PLANS
                </button>
            </div>
        </div>
    );
};

export default Navbar;
