import Image from 'next/image'
import React from 'react'


export default function Home() {
    return (
        <>
            <div className=' text-center md:px-44 px-3 md:py-40 py-28 bg-[url("https://dev.rodpub.com/images/272/215_main.jpg")] bg-cover bg-fixed rounded-b-[30%]'>
                <h1 className=' text-black md:text-6xl text-3xl font-extrabold'>Prepare yourself for the Next Generation of Internet with Panaverse</h1>
                <p className='md:text-xl text-md mt-4 md:px-[80px] text-justify'>One Year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligance (AI), Cloud Edge, and Ambient Computing / IOT Technologies</p>
                <button className=' bg-blue-700 px-5 py-3 rounded-lg text-white font-semibold mt-4'>MORE INFO</button>
            </div>


            <div className='flex shadow-2xl w-[70%] justify-around md:py-[80px] py-[40px] space-y-9 items-center m-auto -mt-[80px] bg-white rounded-2xl md:flex-row flex-col'>
                <Image src={'/logo.png'} alt="" height={150} width={150} />
                <Image src={'/PanaCloud.jpeg'} alt="" height={150} width={150} />
                <Image src={'/Saylani.png'} alt="" height={150} width={150} />
            </div>

            <div className='w-[70%] flex m-auto mt-10 md:flex-row flex-col items-center'>
                <div className='md:w-1/2'>
                    <Image src={'/MetaVrs.avif'} alt='' height={400} width={400} />
                </div>
                <div className='md:w-1/2 p-7'>
                    <h1 className=' text-black md:text-5xl text-3xl font-bold border-l-[6px] border-blue-700 pl-3'>Program Of Studies</h1>
                    <p className='md:text-md text-base mt-4 text-justify'>This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarter of 13 weeks each. The emphasis will be on hands-on learing by education students to produce projects.</p>
                    <button className=' bg-blue-700 px-5 md:py-3 py-2 rounded-lg text-white font-semibold mt-4'>READ MORE</button>
                </div>
            </div>

            <div className='flex my-10 md:flex-row flex-col items-center'>
                <div className='md:w-1/2 bg-[url("/bootcamp.jpg")] bg-cover bg-center h-[11cm] '></div>
                <div className='md:w-1/2 bg-[url("https://img.freepik.com/free-vector/gradient-white-background-with-wavy-lines_79603-2166.jpg?size=626&ext=jpg&ga=GA1.2.760645970.1679185169&semt=ais")] bg-cover -my-6 md:p-20 p-7'>
                    <h1 className=' text-black md:text-5xl text-4xl font-bold border-l-[6px] border-blue-700 pl-3'>Bootcamp 2023</h1>
                    <p className='md:text-lg text-base mt-4 text-justify'>This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarter of 13 weeks each. The emphasis will be on hands-on learing by education students to produce projects.</p>
                    <button className=' bg-blue-700 px-5 md:py-3 py-2 rounded-lg text-white font-semibold mt-4'>READ MORE</button></div>
            </div>


        </>
    )
}
