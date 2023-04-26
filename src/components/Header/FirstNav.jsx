import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBell} from 'react-icons/fa';
import Marquee from "react-fast-marquee";

const FirstNav = () => {
    return (
        <div className='border-b px-3  py-2 flex justify-between'>
            <div className='md:flex gap-3 hidden '>
                <NavLink to='/about_us' className='text-sm text-slate-600 '>About us</NavLink>
                <div className='border'></div>
                <NavLink to='/my_account' className='text-sm text-slate-600 '>My Account</NavLink>
            </div>
                <div className='flex items-center gap-1 w-full md:w-auto justify-center'>
                    <FaBell className='text-slate-600'></FaBell>
                    <p className='text-slate-600 font-semibold text-sm'><span className='text-[#81B13D]'>Ads</span> You will get 25% discount <span className='text-[#81B13D] hover:text-yellow-500 '>Shop now</span></p>
                </div>
            <div className='hidden md:flex gap-2 items-center '>
                 <p className='text-slate-600 font-semibold text-sm'>Need help? Call Us: <span className='text-[#81B13D] hover:text-yellow-500 '>+ 1800 900</span></p>
                 <div className='border h-full'></div>
                 <select className='outline-none text-slate-600 font-medium'>
                    <option>$ USD</option>
                    <option>&euro; Euro</option>
                 </select>
            </div>
        </div>
    );
};

export default FirstNav;