import React from 'react'
import NoveltySection from '../sections/NoveltySection'
import NewsletterSection from '../sections/NewsletterSection'
import PromoSection from '../sections/PromoSection'
import BestSellersSection from '../sections/BestSellersSection'

const Main = () => {
  return (
    <main>
      <PromoSection />
      <NoveltySection />
      <BestSellersSection />
      <NewsletterSection />
    </main>
  )
}

export default Main