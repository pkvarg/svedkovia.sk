import React from 'react'
import { useState } from 'react'

const LanguageBar = ({ language, setLanguage }) => {
  const handleLanguage = (lang) => {
    setLanguage(lang)
  }

  return (
    <div className='flex flex-row gap-3 items-center translate-y-[7.5%]'>
      <button onClick={() => handleLanguage('english')}>
        <img
          className='w-[3rem] md:w-[3rem] lg:w-[2rem]'
          src='/english.webp'
          alt='english'
        />
      </button>

      <button onClick={() => handleLanguage('slovak')}>
        <img
          className='w-[3rem] md:w-[3rem] lg:w-[2rem]'
          src='/slovak.webp'
          alt='slovak'
        />
      </button>
    </div>
  )
}

export default LanguageBar
