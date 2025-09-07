

import FaqAccordion from '@/components/faqPage/FaqAccordin'
import FaqHero from '@/components/faqPage/FaqHero'
import FaqSection from '@/components/homepage/Faq'

import React from 'react'

export default function page() {
  return (
    <div>
      <FaqHero></FaqHero>
        <FaqAccordion></FaqAccordion>
        <div className='block lg:hidden'>
        <FaqSection></FaqSection>
        </div>

    </div>
  )
}