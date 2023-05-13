"use client"

import React, { useState } from 'react'
import { programsData } from "./Data"
import Image from 'next/image'
// import QuarterBox from './shared/QuarterBox'


const SpecializedTracks = () => {


    const [selectedItem, setSelectedItem] = useState("wmd")  //useState is used for rerandring purposes, AND setSelectedItem is the function which is used to modify the data stored in selectedItems

    const selectedItemData = programsData.find((item) => item.slug === selectedItem) // selectedItemData main ab saary object ka data aay jay ga jis ka slug match ho ga

    console.log(selectedItem)

    return (
        <section>
            <div className='max-w-screen-2xl px-4 mx-10'>
                {/* Heading */}
                <div>
                    <h2 className='text-5xl font-bold whitespace-pre-line'>Specialized Tracks:</h2>
                    <p className='mt-3 text-xl text-slate-600'>After completing the first three quarters the participants will select one or more specializations consisting of two courses each.</p>
                </div>

                <div className='mt-10 flex gap-x-6 gap-y-8 flex-col-reverse lg:flex-row'>

                    {/* content left */}
                    <div className='shadow-xl rounded-xl border border-slate-600 p-8 flex-1 basis-8/12 self-start sticky top-24'>

                        {/* self-start is very important property which is used to make div shrink */}
                        {/* Sticky top-0 is used to hold the div static while the other left div is moving with cursor */}

                        <h4 className=' text-teal-700 text-lg'>Specialized Track</h4>
                        <h3 className=' text-2xl font-bold'>{selectedItemData?.header}</h3>
                        <p className='text-lg text-slate-600 mt-2 text-justify'>{selectedItemData?.desciption}</p>
                        <button className=' text-teal-700 text-xl mt-4 underline'>Learn More  </button>


                        <div className='flex gap-x-8  mt-8 flex-col md:flex-row'>
                            {
                                selectedItemData?.quarters.map((item) => (

                                    <div key={item.number} className='w-1/2 mt-6 md:mt-4 '>
                                        <h4 className=" font-bold text-lg">{item.header}</h4>
                                        <p className='mt-2 text-slate-600 z-0 text-justify'>{item.description}</p>
                                        <div className='absolute text-gray-200 -top-8 right-10 text-[170px] font-bold -z-10'>{item.number}</div>

                                    </div>

                                ))
                            }
                        </div>


                    </div>


                    {/* content right */}
                    <div className=' space-y-4 px-4 py-6 bg-slate-100 flex-1 basis-4/12'>
                        {
                            programsData.map((item, i) => (
                                <div onClick={() => setSelectedItem(item.slug)} key={item.slug} className='flex gap-x-4 items-center cursor-pointer'>

                                    <div className='flex-shrink-0 h-24 w-36'>
                                        {/* <div className=' w-20 h-16 rounded bg-red-300'></div> */}
                                        <Image src={item.image} alt={item.header} className={'h-24 object-cover rounded-md'} />
                                    </div>
                                    <div>
                                        <h1 className='text-primary font-medium'>Specialized Program</h1>
                                        <h3 className='text-xl font-semibold'>{item.header}</h3>
                                    </div>

                                </div>
                            ))
                        }

                    </div>



                </div>

            </div>


            {/* <div className=' h-screen'></div> */}

        </section>
    )
}

export default SpecializedTracks