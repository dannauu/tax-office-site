import React from 'react'
import GoogleMaps from '../GoogleMaps/GoogleMaps'

const HeroBanner = () => {
    return (
        <section className='image'>
            <div className='overlay'>
                <div className='text-center'>
                    <h1 className='pb-5 text-4xl'>Located in Oak Grove, MO</h1>
                    <GoogleMaps />
                </div>
                <div className='hours'>
                    <h1 className='text-4xl bold italic pb-6'>Hours of Operation:</h1>
                    <ul className='text-center'>
                        <li className='font-bold'>Monday: <span className='font-thin'>9:00am - 8:00pm</span></li>
                        <li className='font-bold'>Tuesday: <span className='font-thin'>9:00am - 8:00pm</span></li>
                        <li className='font-bold'>Wednesday: <span className='font-thin'>9:00am - 8:00pm</span></li>
                        <li className='font-bold'>Thursday: <span className='font-thin'>9:00am - 8:00pm</span></li>
                        <li className='font-bold'>Friday: <span className='font-thin'>9:00am - 8:00pm</span></li>
                        <li className='font-bold'>Saturday: <span className='font-thin'>10:00am - 5:00pm</span></li>
                        <li className='font-bold'>Sunday: <span className='font-thin'>10:00am - 5:00pm</span></li>
                    </ul>
                    <p className='text-center italic text-sm pt-2'>**Off-Season hours vary, call for appointment**</p>
                </div>
            </div>
        </section>
    )
}

export default HeroBanner