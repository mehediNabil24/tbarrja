


import FaqSection from '@/components/homepage/Faq'
import MainPricing from '@/components/pricingPage/MainPricing'
import PricingHero from '@/components/pricingPage/PricingHero'
import React from 'react'

export default function page() {
  return (
    <div>
      <PricingHero></PricingHero>
      <MainPricing></MainPricing>
      <div className='block lg:hidden'>
        <FaqSection></FaqSection>
      </div>
        

    </div>
  )
}