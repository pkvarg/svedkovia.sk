import React, { useState, useEffect } from 'react'
import Translation from '../Home.json'
import { useStateContext } from '../context/StateContext'

const Footer = () => {
  const { language } = useStateContext()
  const [content, setContent] = useState({})

  useEffect(() => {
    if (language === 'slovak') {
      setContent(Translation.slovak)
    } else if (language === 'english') {
      setContent(Translation.english)
    } else {
      setContent(Translation.czech)
    }
  }, [language])

  return (
    <footer className='homegradient'>
      <section className='mx-4 pt-4 pb-4'></section>
      <section className='mx-4 text-brown3 text-[20px] pb-8'>
        <div className=''>
          <ul className='flex flex-col lg:flex-row justify-center items-center text-brown3 text-[20px] gap-2 lg:gap-6 font-bolder'>
            <li>
              <a href='/co-hlasali-apostoli'>
                {content.ftLi1}
                {/* Čo hlásali apoštoli */}
              </a>
            </li>
            <li>
              <a href='/je-jezis-boh'>
                {content.ftLi2}

                {/* Je Ježiš Boh? */}
              </a>
            </li>
            <li>
              <a href='/koho-panom-je-jezis'>
                {content.ftLi3}

                {/* Koho Pánom je Ježiš? */}
              </a>
            </li>

            <li>
              <a href='/vecera-panova'>
                {content.ftLi4}

                {/* Večera Pánova */}
              </a>
            </li>
          </ul>
        </div>
        <div className='flex flex-row gap-2 items-center justify-center mt-8 lg:mt-0'>
          <a href='https://cestazivota.sk' target='_blank'>
            cestazivota.sk
          </a>
          <p className='hidden lg:flex pb-4'>|</p>

          <a href='https://jwfakty.sk' target='_blank'>
            jwfakty.sk
          </a>
        </div>
        <div className='flex justify-center text-[#8d8d8d] mt-2'>
          <a href='https://pictusweb.sk'>
            &#60;&#47;&#62; PICTUSWEB development
          </a>
        </div>
      </section>
    </footer>
  )
}

export default Footer
