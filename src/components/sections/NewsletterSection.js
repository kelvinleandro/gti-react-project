import React from 'react';
import './NewsletterSection.css';

const NewsletterSection = () => {
  return (
    <section className='newsletter'>
      <h1 className='font-bold text-3xl text-white'>ASSINE NOSSA NEWSLETTER</h1>
      <h3 className='font-medium text-lg text-white'>Fique por dentro das novidades e não perca nossas promoções</h3>
      <form>
        <input type="email" id="email" name="email" placeholder="Digite seu email"></input>
        <br/>
        <button type="button" className='sign-btn'>Inscrever-se</button>
      </form>
    </section>
  )
}

export default NewsletterSection