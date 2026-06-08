import React from 'react'
import Hero from '../components/Hero'
import HeroOriginal from '../components/HeroOriginal'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import LatestDrops from '../components/LatestDrops'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
  return (
    <div>
      <Hero />
      <HeroOriginal />
      <LatestCollection/>
      <BestSeller/>
      <LatestDrops/>
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home
