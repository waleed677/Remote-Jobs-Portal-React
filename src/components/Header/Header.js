import React, { useState } from 'react';
import logo from '../../assets/images/logo.png'

function Header() {

    const [openMenu, setOpenMenu] = useState(false);


    return (

        <div className='shadow-md mx-auto w-full  '>
            <div className="flex items-center justify-between bg-white">
                {/* logo */}
                <div className='flex items-center cursor-pointer'>
                    <img src={logo} className="w-72 sm:w-60" />
                </div>


                <div onClick={() => setOpenMenu(!openMenu)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                </div>


                <ul className={`md:flex md:items-center px-12 md:pb-0 md:shadow-none shadow absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in  ${openMenu ? 'top-20 ':'top-[-490px]'}`}>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>About Us</li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>Blog</li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'>
                        <button className='bg-blue-900 p-3 rounded-xl text-white md:w-auto w-72'>Donate Us</button>
                    </li>
                </ul>

            </div>
        </div>

    )
}

export default Header