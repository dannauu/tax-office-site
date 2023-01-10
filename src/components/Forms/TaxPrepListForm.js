import React from 'react'
import TaxPrepList from '../../assets/2022 TAX PREP CHECKLIST.pdf'
import PrepListImg from '../../assets/prepList.webp'



const TaxPrepListForm = () => {
    return (
        <div className='sm:p-2'>
            <h1 className='sm:text-xs font-bold underline'>Tax Prep Checklist</h1>
            <a href={TaxPrepList} download className="rounded-lg sm:text-xs">          <img src={PrepListImg} alt='prep-list' className='formPics sm:w-40 pb-10' />
            </a>
        </div>
    )
}

export default TaxPrepListForm