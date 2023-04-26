import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { AiOutlineShoppingCart } from "react-icons/ai";

const SecondNav = () => {
    return (
        <div className='flex p-5 border h-fit items-center'>
            <img className='md:w-[180px] md:h-[55px]' src="https://nest.apexcode.info/media/site_logo/imgs/logo_VKBBW51_1.png" alt="" />
            <div className='border-2 rounded-md border-[#81B13D] md:h-[50px] md:w-2/4 md:ml-20 flex items-center'>
                <select name="" id="" className='font-semibold'>
                    <option value="Category">All Categories</option>
                    <option value="Category">Categories</option>
                    <option value="Category">All</option>
                </select>
            </div>
            <div className='flex gap-2 items-center ml-auto'>
                <div className='flex items-center gap-1'>
                    <div className='relative w-fit h-fit'>
                        <AiOutlineShoppingCart className='w-7 h-7'>
                        </AiOutlineShoppingCart>
                        <div className='w-4 h-4 rounded-full bg-lime-600 absolute -top-2 -right-1 flex justify-center items-center  text-white text-sm'><span>0</span></div>
                    </div>
                    <p className='text-slate-600 '>Cart</p>
                </div>
                <div className='flex items-center gap-1'>
                    <FaUserAlt className='w-6 h-6 '></FaUserAlt>
                    <p className='text-slate-600'>Account</p>
                </div>
            </div>
        </div>
    );
};

export default SecondNav;