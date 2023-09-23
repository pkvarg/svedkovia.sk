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
