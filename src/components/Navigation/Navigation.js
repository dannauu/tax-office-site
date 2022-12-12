import React from 'react'

const Navigation = () => {
  return (
    // <nav className='flex flex-row'>
    //     <h1 className='text-4xl basis-1/2 text-center'>TAXES <span className='logoText text-2xl'>BY</span> ME.TJR</h1>
    //     <button className='text-3xl basis-1/2 text-center'>816-690-7997</button>
    // </nav>


    <nav class="bg-white">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <h1 className='text-4xl'>TAXES <span className='logoText text-2xl'>BY</span> ME.TJR</h1>
        <div class="">
          <ul class="flex flex-row p-4 font-medium">
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