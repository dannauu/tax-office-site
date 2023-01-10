import React from 'react'
import EngagementLetterImg from '../../assets/generalEngagementLetter.webp'
import EngagementLetter from '../../assets/2022 GENERALENGAGELETTER.pdf'

const GeneralEngagementForm = () => {
    return (
        <div className='sm:p-2'>
            <h1 className='sm:text-xs font-bold underline'>General Engagement Letter</h1>
            <a href={EngagementLetter} download className="rounded-lg sm:text-xs">          <img src={EngagementLetterImg} alt='engagement-letter' className='formPics sm:w-40 pb-10' />
            </a>
        </div>
    )
}

export default GeneralEngagementForm