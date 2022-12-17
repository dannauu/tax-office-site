import React from 'react'

const Hours = () => {
    return (
        <div className='bg-gray-900/60 p-3 rounded-md'>
            <h1 className='text-4xl font-bold pb-3 lg:text-lg text-center'>Hours of Operation:</h1>
            <ul className='text-center lg:text-sm lg:text-center'>
                <li className='font-bold italic'>Monday: <span className='font-thin'>9:00am - 8:00pm</span></li>
                <li className='font-bold italic'>Tuesday: <span className='font-thin'>9:00am - 8:00pm</span></li>
                <li className='font-bold italic'>Wednesday: <span className='font-thin'>9:00am - 8:00pm</span></li>
                <li className='font-bold italic'>Thursday: <span className='font-thin'>9:00am - 8:00pm</span></li>
                <li className='font-bold italic'>Friday: <span className='font-thin'>9:00am - 8:00pm</span></li>
                <li className='font-bold italic'>Saturday: <span className='font-thin'>9:00am - 3:00pm</span></li>
                <li className='font-bold italic'>Sunday: <span className='font-thin'>Closed</span></li>
            </ul>
            <p className='text-center italic text-sm pt-2 lg:text-xs'>**Off-Season hours vary, call for appointment**</p>
            <div className='flex flex-row text-xs pt-1 justify-center'>
                <p className='pr-3'><span className='font-bold italic'>Phone: </span>(816) 690-7997</p>
                <p><span className='font-bold italic'>Fax: </span>(816) 625-1472</p>
            </div>
            <h1 className='text-center'>Email: <a href='mailto:taxesbymetjr@gmail.com' className='cursor-pointer underline'>taxesbymetjr@gmail.com</a></h1>
        </div>
    )
}

export default Hours