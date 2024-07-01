import React from 'react';
import "./footer.css";
import logo from "../assets/logo.svg";
import facebook from "../assets/icon-facebook.svg";
import instagram from "../assets/icon-instagram.svg";
import twitter from "../assets/icon-twitter.svg";
import pinterest from "../assets/icon-pinterest.svg";

const Footer = () => {
    return (
        <div className='footer h-fit'>
            <div className='w-[85%] mx-auto py-16'>
                <div className='flex gap-6 lg:gap-0 flex-col lg:flex-row items-center justify-between py-8 border-b border-gray-400'>
                    <div>
                        <img src={logo} alt="Logo" />
                    </div>

                    <div className='flex gap-4 items-center'>
                        <img className='cursor-pointer' src={facebook} alt="Facebook" />
                        <img className='cursor-pointer' src={twitter} alt="Twitter" />
                        <img className='cursor-pointer' src={pinterest} alt="Pinterest" />
                        <img className='cursor-pointer' src={instagram} alt="Instagram" />
                    </div>
                </div>

                <div className='mt-8 grid grid-cols-1 md:grid-cols-2 text-center lg:text-left lg:grid-cols-4 gap-6'>
                    <div>
                        <p className='text-[#837d87] font-karla text-[15px] pb-8 font-semibold uppercase'>Our Company</p>

                        <ul className='space-y-3'>
                            <li  className='text-[#2d2640] font-karla text-[15px] font-semibold uppercase'>How We Work</li>
                            <li className='text-[#2d2640] font-karla text-[15px] font-semibold uppercase'>Why Insure?</li>
                            <li className='text-[#2d2640] font-karla text-[15px] font-semibold uppercase'>View Plans</li>
                            <li className='text-[#2d2640] font-karla text-[15px] font-semibold uppercase'>Reviews</li>
                        </ul>
                    </div>

                    <div>
                        <p className='text-[#837d87] font-karla text-[15px] pb-8 font-semibold uppercase'>Help Me</p>

                        <ul className='space-y-3'>
                            <li  className='text-[#2d2640] font-karla text-[15px] font-semibold uppercase'>FAQ</li>
                            <li className='text-[#2d2640] font-karla text-[15px] font-semibold uppercase'>Terms of Use</li>
                            <li className='text-[#2d2640] font-karla text-[15px] font-semibold uppercase'>Privacy Policy</li>
                            <li className='text-[#2d2640] font-karla text-[15px] font-semibold uppercase'>Cookies</li>
                        </ul>
                    </div>

                    <div>
                        <p className='text-[#837d87] font-karla text-[15px] pb-8 font-semibold uppercase'>Contact</p>

                        <ul className='space-y-3'>
                            <li  className='text-[#2d2640] font-karla text-[15px] font-semibold uppercase'>Sales</li>
                            <li className='text-[#2d2640] font-karla text-[15px] font-semibold uppercase'>Support</li>
                            <li className='text-[#2d2640] font-karla text-[15px] font-semibold uppercase'>Live Chat</li>
                        </ul>
                    </div>


                    <div>
                        <p className='text-[#837d87] font-karla text-[15px] pb-8 font-semibold uppercase'>Others</p>

                        <ul className='space-y-3'>
                            <li  className='text-[#2d2640] font-karla text-[15px] font-semibold uppercase'>Career</li>
                            <li className='text-[#2d2640] font-karla text-[15px] font-semibold uppercase'>Press</li>
                            <li className='text-[#2d2640] font-karla text-[15px] font-semibold uppercase'>Licences</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
