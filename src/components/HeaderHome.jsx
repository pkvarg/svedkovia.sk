import React, { useState } from 'react'

const HeaderHome = () => {
  const [navbar, setNavbar] = useState(false)

  return (
    <header className='bg-transparent'>
      <nav className='w-full text-white nav-font'>
        <div className='justify-between px-4 mx-auto md:items-center md:flex md:px-8'>
          <div className='mb-0 lg:mb-2'>
            <div className='flex items-center justify-between py-3 md:py-5 md:block'>
              {/* <a className='text-[25px] font-medium text-brown3' href='/'>
                Svedkovia
              </a> */}
              <div className='md:hidden'>
                <button
                  className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-10 h-10'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-10 h-10'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M4 6h16M4 12h16M4 18h16'
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              {/* <ul className='justify-center text-black space-y-8 md:flex md:space-x-6 md:space-y-0'>
                <li>
                  <a href='/omsa'>Omša</a>
                </li>
                <li>
                  <a href='/spoved'>Spoveď</a>
                </li>
                <li>
                  <a href='/manzelstvo'>Manželstvo</a>
                </li>
                <li>
                  <a href='/papezsky-urad'>Pápežský úrad</a>
                </li>
                <li>
                  <a href='/knazsky-urad'>Kňazský úrad</a>
                </li>
                <li>
                  <a href='/klastorny-zivot'>Kláštorný život</a>
                </li>
                <li>
                  <a href='/maria'>Mária</a>
                </li>
                <li>
                  <a href='/hriech'>Hriech</a>
                </li>
                <li>
                  <a href='/spasenie'>Spasenie</a>
                </li>
                <li>
                  <a href='/biblia'>Biblia</a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default HeaderHome
