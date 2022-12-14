import React from 'react'
import GoogleMaps from '../GoogleMaps/GoogleMaps'

const HeroBanner = () => {
    return (
        <section className='image'>
            <div className='overlay'>
                <div className='text-center hours'>
                    <h1 className='pb-5 text-4xl'>Located in Oak Grove, MO</h1>
                    <GoogleMaps />
                </div>
                <div className='hours'>
                    <h1 className='text-4xl bold pb-6 mobileHeroBannerH1'>Hours of Operation:</h1>
                    <ul className='text-center'>
                        <li className='font-bold italic'>Monday: <span className='font-thin'>9:00am - 8:00pm</span></li>
                        <li className='font-bold italic'>Tuesday: <span className='font-thin'>9:00am - 8:00pm</span></li>
                        <li className='font-bold italic'>Wednesday: <span className='font-thin'>9:00am - 8:00pm</span></li>
                        <li className='font-bold italic'>Thursday: <span className='font-thin'>9:00am - 8:00pm</span></li>
                        <li className='font-bold italic'>Friday: <span className='font-thin'>9:00am - 8:00pm</span></li>
                        <li className='font-bold italic'>Saturday: <span className='font-thin'>10:00am - 5:00pm</span></li>
                        <li className='font-bold italic'>Sunday: <span className='font-thin'>10:00am - 5:00pm</span></li>
                    </ul>
                    <p className='text-center italic text-sm pt-2'>**Off-Season hours vary, call for appointment**</p>
                </div>
            </div>
        </section>
    )
}

export default HeroBanner