import React, { useState } from 'react';
import AllTaxPayersForm from './AllTaxPayersForm';
import GeneralEngagementForm from './GeneralEngagementForm';
import TaxInfoSheetForm from './TaxInfoSheetForm';
import TaxPrepListForm from './TaxPrepListForm';

const Forms = () => {
  const [currentForm, setCurrentForm] = useState('');
  return (
    <div className='pb-6 relative z-1' id='forms'>
      <h1 className='text-center text-4xl p-2 sm:text-lg italic font-bold printPageButton'>Forms</h1>
      <h2 className='text-center font-semibold pb-4 sm:text-sm italic printPageButton'>Click the button to fillout/download the form:</h2>
      <div className='flex justify-evenly printPageButton sm:p-1'>
        <button className='cursor-pointer px-2 py-1 rounded bg-green-500 hover:bg-green-700 sm:text-xs sm:p-0' onClick={() => setCurrentForm('tax-questions')}>All Tax Payers Questions</button>
        <button className='cursor-pointer px-2 py-1 rounded bg-green-500 hover:bg-green-700 sm:text-xs sm:p-0 ml-1' onClick={() => setCurrentForm('tax-info-sheet')}>Tax Info Form</button>
        <button className='cursor-pointer px-2 py-1 rounded bg-green-500 hover:bg-green-700 sm:text-xs sm:p-0 ml-1' onClick={() => setCurrentForm('tax-prep-list')}>Tax Prep Form</button>
        <button className='cursor-pointer px-2 py-1 rounded bg-green-500 hover:bg-green-700 sm:text-xs sm:p-0 ml-1' onClick={() => setCurrentForm('general-engagement')}>General Engagement Form</button>
      </div>
      <div className='flex flex-row sm:flex-wrap sm:justify-center justify-evenly text-center pb-10'>
        {currentForm === 'tax-questions' && <AllTaxPayersForm />}
        {currentForm === 'tax-info-sheet' && <TaxInfoSheetForm />}
        {currentForm === 'tax-prep-list' && <TaxPrepListForm />}
        {currentForm === 'general-engagement' && <GeneralEngagementForm />}
      </div>
    </div>
  )
}

export default Forms