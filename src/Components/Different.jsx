import React from 'react';
import snappyIcon from "../assets/icon-snappy-process.svg"
import affordableIcon from "../assets/icon-affordable-prices.svg"
import peopleIcon from "../assets/icon-people-first.svg"

const Different = () => {
    return (
        <div className=''>
            <div className='w-[85%] mx-auto'>
                <h1 className='font-dmSerif text-[70px] text-[#2d2640] leading-[70px] my-16'>
                    We're Different
                </h1>

                <div className='grid grid-cols-3 gap-8'>
                    <div>
                        <img src={snappyIcon} alt="" />
                        <h2 className='font-dmSerif text-[30px] text-[#2d2640] leading-[70px] mt-3'>
                            Snappy Process
                        </h2>

                        <p className='text-[#837d87] text-[15px] font-karla mt-3'>
                            Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.

                        </p>
                    </div>

                    <div>
                        <img src={affordableIcon} alt="" />
                        <h2 className='font-dmSerif text-[30px] text-[#2d2640] leading-[70px] mt-3'>
                            Affordable Prices
                        </h2>

                        <p className='text-[#837d87] text-[15px] font-karla mt-3'>
                            We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.

                        </p>
                    </div>


                    <div>
                        <img src={peopleIcon} alt="" />
                        <h2 className='font-dmSerif text-[30px] text-[#2d2640] leading-[70px] mt-3'>
                            People First
                        </h2>

                        <p className='text-[#837d87] text-[15px] font-karla mt-3'>
                            Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Different;