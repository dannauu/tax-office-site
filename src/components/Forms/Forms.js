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
      <h1 className='text-center text-4xl p-3'>Forms</h1>
      <div className='flex flex-row justify-evenly text-center pb-10'>
        <div>
          <img src={QuestionsImg} className='formPics pb-10' />
          <a href={Questions} download className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><button>Download Questions Form</button></a>
        </div>
        <div>
          <img src={InfoSheetImg} className='formPics pb-10' />
          <a href={TaxInfoSheet} download className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><button>Download Tax Info Sheet</button></a>
        </div>
        <div>
          <img src={PrepListImg} className='formPics pb-10' />
          <a href={TaxPrepList} download className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><button>Download Tax Prep Checklist</button></a>
        </div>
      </div>
    </div>
  )
}

export default Forms