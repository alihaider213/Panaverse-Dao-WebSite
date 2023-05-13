import React from 'react'
import Image from 'next/image'
import OutcomeImg from '@/assets/images/outcome-poster.webp'
import {TiTickOutline} from 'react-icons/ti'

const outcomePoints = ['Product Ownership', 'Freelancing', 'Global Marketing by Panaverse DAO', 'Boosting Economy']


const ProgramOutcome = () => {
    return (
        <section className='mt-16 md:mt-28 m-20 '>
            <div className='flex gap-x-8 gap-y-6 items-center flex-col-reverse md:flex-row'>
                {/* Left Image */}
                <div className='flex-1'>
                    <Image src={OutcomeImg} alt='picture' />
                </div>


                {/* Right Content */}
                <div className=' flex-1'>
                    <h2 className='font-bold text-5xl'>The Outcome for Participants of the Program</h2>
                    <p className='mt-4 text-slate-600 text-lg text-justify'>As a graduate of this program, you will own valuable products such as Full-Stack App Templates, AR and VR Experiences, and APIs that are marketed globally by the Panaverse DAO. You will also have the opportunity to offer your services at a rate of $50 per hour, providing a path to financial stability while contributing to the growth of Pakistan's software exports.</p>

                    <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4' >
                        {outcomePoints.map((item, i) => (
                            <div key={i} className='flex items-center gap-x-2'>
                                <div className='flex bg-primary text-white w-6 h-6 justify-center items-center rounded-lg shrink-0'>
                                <TiTickOutline />
                                </div>
                                <h3 className='font-medium text-base'> {item}</h3>
                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </section>
    )
}

export default ProgramOutcome