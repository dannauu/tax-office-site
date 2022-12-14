import React from 'react';
import Questions from '../../assets/2022 INFO QUESTIONS.pdf'
import TaxInfoSheet from '../../assets/2022 TAX INFO SHEET.pdf'
import TaxPrepList from '../../assets/2022 TAX PREP CHECKLIST.pdf'
import QuestionsImg from '../../assets/infoQuestions.png'
import InfoSheetImg from '../../assets/infoSheet.png'
import PrepListImg from '../../assets/prepList.png'

const Forms = () => {
  return (
    <div className='pb-6' id='forms'>
      <h1 className='text-center text-4xl p-3 mobileFaqH1'>Forms</h1>
      <div className='flex flex-row justify-evenly text-center pb-10'>
        <div>
          <img src={QuestionsImg} className='formPics formsMobile pb-10' />
          <a href={Questions} download className="formsMobileBtns text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 px-5 py-2.5 text-center mr-2 mb-2">Download Questions Form</a>
        </div>
        <div>
          <img src={InfoSheetImg} className='formPics formsMobile pb-10' />
          <a href={TaxInfoSheet} download className="formsMobileBtns text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 px-5 py-2.5 text-center mr-2 mb-2">Download Tax Info Sheet</a>
        </div>
        <div>
          <img src={PrepListImg} className='formPics formsMobile pb-10' />
          <a href={TaxPrepList} download className="formsMobileBtns text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 px-5 py-2.5 text-center mr-2 mb-2">Download Tax Prep Checklist</a>
        </div>
      </div>
    </div>
  )
}

export default Forms