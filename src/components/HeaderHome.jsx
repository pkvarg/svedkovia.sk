import React, { useState } from 'react'

const HeaderHome = () => {
  const [navbar, setNavbar] = useState(false)

  return (
    <header className='bg-transparent'>
      <nav className='w-full text-white nav-font'>
        <div className='justify-between px-4 mx-auto md:items-center'>
          <div className='mb-0'>
            <div className='flex items-center justify-between py-3 md:flex lg:hidden'>
              <a className='text-[30px] font-medium text-brown3' href='/'>
                Svedkovia
              </a>
              <div className='flex'>
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
          <div className='relative bg-[#c1beab] z-999'>
            <div
              className={`absolute header-bg -top-[35%] -right-8 w-[100vw] p-16 flex-1 justify-self-center py-18 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className='justify-center text-brown3 text-[27.5px] gap-2 font-bolder flex flex-col lg:hidden'>
                <li>
                  <a href='/co-hlasali-apostoli'>Čo hlásali apoštoli</a>
                </li>
                <li>
                  <a href='/je-jezis-boh'>Je Ježiš Boh?</a>
                </li>
                <li>
                  <a href='/koho-panom-je-jezis'>Koho Pánom je Ježiš?</a>
                </li>

                <li>
                  <a href='/vecera-panova'>Večera Pánova</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default HeaderHome
