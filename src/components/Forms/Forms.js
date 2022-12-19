import React from 'react';
import Questions from '../../assets/2022 INFO QUESTIONS.pdf'
import TaxInfoSheet from '../../assets/2022 TAX INFO SHEET.pdf'
import TaxPrepList from '../../assets/2022 TAX PREP CHECKLIST.pdf'
import QuestionsImg from '../../assets/infoQuestions.png'
import InfoSheetImg from '../../assets/infoSheet.png'
import PrepListImg from '../../assets/prepList.png'
import EngagementLetterImg from '../../assets/generalEngagementLetter.png'
import EngagementLetter from '../../assets/2022 GENERAL ENGAGEMENT LETTER.pdf'

const Forms = () => {
  return (
    <div className='pb-6' id='forms'>
      <h1 className='text-center text-4xl p-2 sm:text-lg italic font-bold'>Forms</h1>
      <h2 className='text-center font-semibold pb-4 sm:text-sm italic'>Click the form you would like to download</h2>
      <div className='flex flex-row sm:flex-wrap sm:justify-center justify-evenly text-center pb-10'>
        <div className='sm:p-2'>
          <h1 className='sm:text-xs font-bold'>Questions Form</h1>
          <a href={Questions} download className="rounded-lg sm:text-xs text-white "><img src={QuestionsImg} alt='question-form' className='formPics sm:w-40 pb-10' /></a>
        </div>
        <div className='sm:p-2'>
          <h1 className='sm:text-xs font-bold'>Tax Info Sheet</h1>
          <a href={TaxInfoSheet} download className="rounded-lg sm:text-xs">          <img src={InfoSheetImg} alt='info-sheet' className='formPics sm:w-40 pb-10' />
          </a>
        </div>
        <div className='sm:p-2'>
          <h1 className='sm:text-xs font-bold'>Tax Prep Checklist</h1>
          <a href={TaxPrepList} download className="rounded-lg sm:text-xs">          <img src={PrepListImg} alt='prep-list' className='formPics sm:w-40 pb-10' />
          </a>
        </div>
        <div className='sm:p-2'>
          <h1 className='sm:text-xs font-bold'>General Engagement Letter</h1>
          <a href={EngagementLetter} download className="rounded-lg sm:text-xs">          <img src={EngagementLetterImg} alt='engagement-letter' className='formPics sm:w-40 pb-10' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Forms