import React from 'react'

const Navigation = () => {
  return (
    // <nav className='flex flex-row'>
    //     <h1 className='text-4xl basis-1/2 text-center'>TAXES <span className='logoText text-2xl'>BY</span> ME.TJR</h1>
    //     <button className='text-3xl basis-1/2 text-center'>816-690-7997</button>
    // </nav>


    <nav className="bg-white border-b-8 border-double border-black">
      <div className="container flex flex-wrap items-center justify-between mx-auto sm:justify-center">
        <div>
        <h1 className='text-4xl sm:text-base pl-5 font-medium sm:p-0 sm:text-center'>TAXES <span className='logoText text-2xl sm:text-xs'>BY</span> ME.TJR</h1>
        <h2 className='pl-5 text-xs text-center font-semibold italic sm:p-0'>Federal and State Tax Preparation</h2>
        </div>
        <div className='sm:text-center'>
          <ul className="flex flex-row p-4 font-medium sm:text-xs">
            <li>
              <a href="#forms" className="p-2" aria-current="page">Forms</a>
            </li>
            <li>
              <a href="#faq" className="p-2">FAQ</a>
            </li>
            <li>
              <a href="tel:816-690-7997" className="p-2">816-690-7997</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navigation