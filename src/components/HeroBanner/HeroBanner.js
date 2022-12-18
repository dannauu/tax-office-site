import React from 'react'
import AboutMessage from '../AboutMessage/AboutMessage'
import GoogleMaps from '../GoogleMaps/GoogleMaps'
import Hours from '../Hours/Hours'

const HeroBanner = () => {
    return (
        <section className='image'>
            <AboutMessage />
            <div className='overlay sm:flex-col'>
                <GoogleMaps />
                <Hours />
            </div>
        </section>
    )
}

export default HeroBanner