import React from 'react'
import NoveltySection from '../../sections/novelty-section/NoveltySection'
import NewsletterSection from '../../sections/newsletter-section/NewsletterSection'
import PromoSection from '../../sections/promo-section/PromoSection'
import BestSellersSection from '../../sections/best-sellers-section/BestSellersSection'
import BrandsSection from '../../sections/brands-section/BrandsSection'
import AboutSection from '../../sections/about-section/AboutSection'

const HomePage = () => {
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

export default HomePage