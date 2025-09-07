




import FaqSection from '@/components/homepage/Faq'
import ExpertAdvisorsShowcase from '@/components/productPage/ExpertAdvisor'

import ProductHero from '@/components/productPage/ProductHero'
import React from 'react'

export default function page() {
  return (
    <div>
  
        
       <ProductHero></ProductHero>
        <ExpertAdvisorsShowcase></ExpertAdvisorsShowcase>
        <div className='block lg:hidden'>
          <FaqSection></FaqSection>
        </div>

    </div>
  )
}