import React from 'react'
import { GiCheckMark } from "react-icons/gi";

const AboutMessage = () => {
    return (
        <div className='text-center z-0'>
            <h1 className='p-4 text-4xl'>Serving our communities tax preparation needs since 2001.</h1>
            <h2>Timm Renoylds primary goal when creating Taxes by METJR was to be a local trustworthy tax preparation service.</h2>
            <div className='flex flex-row justify-evenly pt-5'>
                <div className='bg-white h-16 w-24 p-2'>
                    <h1>Trustworthy</h1>
                    <GiCheckMark />
                </div>
                <div className='bg-white text-center h-16 w-24 p-2'>
                    <h1>Experienced</h1>
                    <GiCheckMark />
                </div>
                <div className='bg-white text-center h-16 w-24 p-2'>
                    <h1>Professional</h1>
                    <GiCheckMark />
                </div>
            </div>
        </div>
    )
}

export default AboutMessage