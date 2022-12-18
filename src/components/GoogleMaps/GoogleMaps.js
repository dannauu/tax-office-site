import React from 'react'

const GoogleMaps = () => {
  return (
    <div className='text-center bg-gray-900/60 p-3 rounded-md'>
      <h1 className='pb-4 text-4xl lg:text-sm'>Located in Oak Grove, MO</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3100.4021802448265!2d-94.13104778439684!3d39.00613824813169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c1138d04c71b07%3A0xcd5ce04dfe19d5db!2sTAXES%20BY%20ME.TJR!5e0!3m2!1sen!2sus!4v1670623868112!5m2!1sen!2sus" className='h-72 aspect-video lg:h-48 rounded-lg m-auto' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>

  )
}

export default GoogleMaps