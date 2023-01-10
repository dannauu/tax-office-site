import React from 'react'
import Questions from '../../assets/2022 INFO QUESTIONS.pdf'
import QuestionsImg from '../../assets/infoQuestions.webp'

const AllTaxPayersForm = () => {
    return (
        <div className='sm:p-2'>
            <h1 className='sm:text-xs font-bold underline'>Questions Form</h1>
            <a href={Questions} download className="rounded-lg sm:text-xs text-white "><img src={QuestionsImg} alt='question-form' className='formPics sm:w-40 pb-10' /></a>
        </div>
    )
}

export default AllTaxPayersForm