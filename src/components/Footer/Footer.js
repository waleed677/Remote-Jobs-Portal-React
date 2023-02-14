import React from 'react'
import Social from './Social/Social'

function Footer() {
  return (
    <div className='bg-black w-full'>
        <div className='md:flex md:items-center justify-between p-5'>
            <div className='text-md text-white'>Made by <a href='#' className='cursor-pointer'>icodeideas_ ❤️</a></div>
            <div className='text-md text-white'>2023 All Rights Reserved</div>
            <div>
                <Social/>
            </div>

        </div>
    </div>
  )
}

export default Footer