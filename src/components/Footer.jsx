import React from 'react'

const Footer = () => {
  return (
    <footer className='homegradient'>
      <section className='mx-4 pt-8 pb-4'></section>
      <section className='mx-4 text-brown3 text-[20px] pb-8'>
        <div className='flex flex-row gap-2 justify-center'>
          {/* <p>&copy; {Date().substring(11, 15)}</p> */}
          {/* <a href='https://cestazivota.sk' target='_blank'>
            cestazivota.sk
          </a> */}
        </div>
        <div className='flex flex-row gap-2 items-center justify-center'>
          <a href='https://cestazivota.sk' target='_blank'>
            cestazivota.sk
          </a>
          <p>|</p>
          <a href='https://sk.bereanbeacon.org' target='_blank'>
            sk.bereanbeacon.org
          </a>
          {/* <a href='https://svedkovia.sk' target='_blank'>
            svedkovia.sk
          </a> */}
        </div>
        <div className='flex justify-center text-[#484848] mt-2'>
          <a href='https://pictusweb.sk'>
            &#60;&#47;&#62; PICTUSWEB development
          </a>
        </div>
      </section>
    </footer>
  )
}

export default Footer
