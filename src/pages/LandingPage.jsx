import React from 'react';
import Hero from '../components/Hero';
import FilmBanner from '../components/FilmBanner';
import SubscriptionPlan from '../components/SubscriptionPlan';
import Adjustable from '../components/Adjustable';
import Devices from '../components/Devices';
import Accordion from '../components/Accordion';

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <FilmBanner />
      <SubscriptionPlan />
      <Adjustable />
      <Accordion />
      <Devices />
    </div>
  )
}

export default LandingPage
