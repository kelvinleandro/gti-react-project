import React from 'react'
import NoveltySection from '../sections/NoveltySection'
import NewsletterSection from '../sections/NewsletterSection'
import PromoSection from '../sections/PromoSection'
import BestSellersSection from '../sections/BestSellersSection'
import BrandsSection from '../sections/BrandsSection'
import AboutSection from '../sections/AboutSection'

const Main = () => {
  return (
    <main>
      <PromoSection />
      <NoveltySection />
      <BestSellersSection />
      <BrandsSection />
      <AboutSection />
      <NewsletterSection />
    </main>
  )
}

export default Main