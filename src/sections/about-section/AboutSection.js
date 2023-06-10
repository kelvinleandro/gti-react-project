import React from 'react'
import './AboutSection.css'
import man from '../../img/man-looking-phone.png'

const AboutSection = () => {
  return (
    <section className='about-section w-full flex flex-col md:flex-row justify-center content-center items-center'>
      <div className='about-text w-[80%] md:w-[35%]'>
        <h2 className='font-bold text-2xl'>SOBRE A CASAS ACRE</h2>
        <p className='font-medium text-lg text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu enim lectus.
          Sed ullamcorper quam eu auctor auctor. Sed maximus eros at tortor aliquam, vitae
          porttitor ipsum molestie. Quisque egestas.</p>
      </div>
      <div className='about-img w-[80%] md:w-[15%]'>
        <img src={man} alt='man looking phone' />
      </div>
    </section>
  )
}

export default AboutSection