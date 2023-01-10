import React from 'react'
import AboutMessage from '../AboutMessage/AboutMessage'
import Hours from '../Hours/Hours'
import ImportantMessage from '../ImportantMessage/ImportantMessage'

const HeroBanner = () => {
    return (
        <section className='image printPageButton'>
            <ImportantMessage />
            <AboutMessage />
            <div className='overlay sm:flex-col'>
                <Hours />
            </div>
        </section>
    )
}

export default HeroBanner