import React from 'react'
import Social from './Social/Social'

function Footer() {
  return (
    <div className='bg-black w-full'>
        <div className='md:flex md:items-center justify-between p-5'>
            <div className='text-md text-white sm:hidden md:block'>Made by <a href='#' className='cursor-pointer'>icodeideas_ ❤️</a></div>
            <div className='text-md text-white text-center'>2023 All Rights Reserved</div>
            <div className='sm:hidden md:block'>
                <Social/>
            </div>

        </div>
    </div>
  )
}

export default Footer