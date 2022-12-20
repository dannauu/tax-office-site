import React from 'react'
import AboutMessage from '../AboutMessage/AboutMessage'
import Hours from '../Hours/Hours'

const HeroBanner = () => {
    return (
        <section className='image'>
            <AboutMessage />
            <div className='overlay sm:flex-col'>
                <Hours />
            </div>
        </section>
    )
}

export default HeroBanner