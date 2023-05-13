import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function Footer() {
  return (
    <>
    <div className=' md:flex align-middle gap-[30px] p-[60px] bg-black text-white'>
        <div className='md:w-1/4 mb-[20px] md:mb-[0px]'>
            <h1 className='font-bold text-2xl mb-[30px] border-l-blue-600 border-l-[6px] pl-[10px]'>About Us</h1>
            <Image src='/logo.png' alt='Panaverse' width={120} height={120} />
            <p className=' text-gray-600 mt-[20px]'>The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread</p>
        </div>
        <div className='md:w-1/4 mb-[20px]'>
            <h1 className='font-bold text-2xl border-l-blue-600 border-l-[6px] pl-[10px]'>Useful Link</h1>
            <ul className=' text-gray-600 pt-[30px]'>
                <li><Link href={'/'} className='hover:text-white'>Home</Link></li>
                <li><Link href={'/'} className='hover:text-white'>Explore</Link></li>
                <li><Link href={'/'} className='hover:text-white'>About</Link></li>
                <li><Link href={'/'} className='hover:text-white'>Contact</Link></li>

            </ul>
        </div>
        <div className='md:w-1/4 mb-[20px]'>
        <h1 className='font-bold text-2xl border-l-blue-600 border-l-[6px] pl-[10px]'>Follow Us</h1>
            <ul className=' text-gray-600 pt-[30px]'>
                <li><Link href={'/'} className='hover:text-white'>Facebook</Link></li>
                <li><Link href={'/'} className='hover:text-white'>Linkedin</Link></li>
                <li><Link href={'/'} className='hover:text-white'>Twitter</Link></li>
                <li><Link href={'/'} className='hover:text-white'>Youtube</Link></li>
                <li><Link href={'/'} className='hover:text-white'>Github</Link></li>
                

            </ul>   
        </div>
        <div className='md:w-1/4 mb-[20px]'>
        <h1 className='font-bold text-2xl border-l-blue-600 border-l-[6px] pl-[10px]'>Contact Us</h1>
            <ul className=' text-gray-600 pt-[30px]'>
                <li><Link href={'/'} className='hover:text-white'>+92 1234567890</Link></li>
                <li><Link href={'/'} className='hover:text-white'>alihaid213@gmail.com</Link></li>
                <li><Link href={'/'} className='hover:text-white'>Faisalabad Pakistan</Link></li>

            </ul>
        </div>
    </div>

    <div className='md:flex justify-between px-[60px] py-[10px] text-center'>
        <p className=' font-bold'>All Rights Reserved © <br className='md:hidden' />| <Link href='https://github.com/alihaider213' target='_blank'>Muhammad Ali Haider</Link></p>  //target='_blank' yah link ko new tab main kholta ha usi tab main nahi
        <div>

        <Link href='/'>Legals </Link>|
        <Link href='/'> Terms of Use </Link>|
        <Link href='/'> Privacy Policy</Link>
        </div>
    </div>
    </>
  )
}
