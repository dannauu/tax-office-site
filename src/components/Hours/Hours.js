import React from 'react'
import { HiHomeModern } from "react-icons/hi2";

const Hours = () => {
    return (
        <div className='bg-gray-900/50 w-1/2 sm:w-full flex flex-row justify-evenly'>
            <div className='sm:text-xs'>
                <h1 className='text-4xl font-semibold pb-3 lg:text-lg text-center underline'>Hours of Operation</h1>
                <ul className='text-center lg:text-sm lg:text-center'>
                    <li className='font-bold italic sm:text-xs'>Monday: <span className='font-thin'>9:00am - 8:00pm</span></li>
                    <li className='font-bold italic sm:text-xs'>Tuesday: <span className='font-thin'>9:00am - 8:00pm</span></li>
                    <li className='font-bold italic sm:text-xs'>Wednesday: <span className='font-thin'>9:00am - 8:00pm</span></li>
                    <li className='font-bold italic sm:text-xs'>Thursday: <span className='font-thin'>9:00am - 8:00pm</span></li>
                    <li className='font-bold italic sm:text-xs'>Friday: <span className='font-thin'>9:00am - 8:00pm</span></li>
                    <li className='font-bold italic sm:text-xs'>Saturday: <span className='font-thin'>9:00am - 3:00pm</span></li>
                    <li className='font-bold italic sm:text-xs'>Sunday: <span className='font-thin'>Closed</span></li>
                </ul>
                <p className='text-center italic text-sm font-semibold sm:text-xs'>**Off-Season hours vary, call for appointment**</p>
            </div>
            <div className='text-center flex flex-col items-center sm:text-xs'>
                <h1 className='text-4xl font-semibold pb-3 lg:text-lg underline'>Contact Us</h1>
                <HiHomeModern className='text-6xl sm:text-2xl' />
                <h2 className=''><span className='font-bold italic'>Address:</span> 1003 S Broadway, Oak Grove, MO 64075</h2>
                <a href='https://www.google.com/maps/dir//taxes+by+metjr/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x87c1138d04c71b07:0xcd5ce04dfe19d5db?sa=X&ved=2ahUKEwiu4azCjIn8AhUaADQIHfAWADMQ9Rd6BAg6EAU' target='_blank' rel="noreferrer" className='underline'>Get Directions</a>
                <p className='pr-3'><span className='font-bold italic'>Phone: </span>(816) 690-7997</p>
                <p><span className='font-bold italic'>Fax: </span>(816) 625-1472</p>
                <h1 className='text-center'><span className='font-bold italic'>Email:</span> <a href='mailto:taxesbymetjr@gmail.com' className='cursor-pointer underline'>taxesbymetjr@gmail.com</a></h1>

            </div>
        </div>
    )
}

export default Hours