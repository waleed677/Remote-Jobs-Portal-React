import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram} from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

function Social() {
  return (
    <div className='flex md:justify-between gap-8 justify-center'>
            <a href='#'><FaLinkedin className='text-2xl text-white'/></a>
            <a href='#'><FaInstagram className='text-2xl text-white'/></a>
            <a href='#'> <FaTwitter className='text-2xl text-white'/></a>
            <a href='#'><FaGithub className='text-2xl text-white'/></a>
    </div>
  )
}

export default Social