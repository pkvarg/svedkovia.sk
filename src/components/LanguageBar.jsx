import React from 'react'
import { useStateContext } from '../context/StateContext'

const LanguageBar = () => {
  const { language, setLanguage } = useStateContext()

  const handleLanguage = (lang) => {
    setLanguage(lang)
  }

  return (
    <div className='absolute top-2 right-8 lg:right-20 flex flex-row gap-3 items-center translate-y-[7.5%]'>
      <button onClick={() => handleLanguage('english')}>
        <img
          className='w-[3rem] md:w-[4rem] lg:w-[2rem]'
          src='/english.webp'
          alt='english'
        />
      </button>

      <button onClick={() => handleLanguage('slovak')}>
        <img
          className='w-[3rem] md:w-[4rem] lg:w-[2rem]'
          src='/slovak.webp'
          alt='slovak'
        />
      </button>
    </div>
  )
}

export default LanguageBar
