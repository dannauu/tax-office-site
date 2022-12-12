import React from 'react'
import GoogleMaps from '../GoogleMaps/GoogleMaps'
import './HeroBanner.css'

const HeroBanner = () => {
    return (
        <section className='image'>
             <h1 className='text-4xl pt-20 text-center text-white'>Welcome, looking for a form? Click <a href='www.google.com'>here</a></h1>
            <div className='overlay flex flex-row justify-evenly'>
               
                <div className='text-center'>
                    <h1 className='pb-5 text-4xl'>Need Directions?</h1>
                    <GoogleMaps />
                </div>
                <div className='hours'>
                    <h1 className='text-4xl bold italic'>Hours of Operation:</h1>
                    <ul className='text-center'>
                        <li>Monday: <span>10:00am - 5:00pm</span></li>
                        <li>Tuesday: <span>10:00am - 5:00pm</span></li>
                        <li>Wednesday: <span>10:00am - 5:00pm</span></li>
                        <li>Thursday: <span>10:00am - 5:00pm</span></li>
                        <li>Friday: <span>10:00am - 5:00pm</span></li>
                        <li>Saturday: <span>10:00am - 5:00pm</span></li>
                        <li>Sunday: <span>10:00am - 5:00pm</span></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default HeroBanner