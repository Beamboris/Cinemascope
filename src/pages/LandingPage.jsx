import React from 'react';
import Hero from '../components/Hero';
import FilmBanner from '../components/FilmBanner';
import SubscriptionPlan from '../components/SubscriptionPlan';
import ThreeCardSection from '../components/ThreeCardSection';
import Devices from '../components/AvailableDevices';
import Accordion from '../components/Accordion';

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <FilmBanner />
      <SubscriptionPlan />
      <ThreeCardSection />
      <Accordion />
      <Devices />
    </div>
  )
}

export default LandingPage
