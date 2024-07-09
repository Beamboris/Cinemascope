import React from 'react';
import Main from '../components/Main';
import FilmBanner from '../components/FilmBanner';
import SubscriptionPlan from '../components/SubscriptionPlan';
import Adjustable from '../components/Adjustable';
import Devices from '../components/Devices';
import Accordion from '../components/Accordion';

const LandingPage = () => {
  return (
    <div>
      <Main />
      <FilmBanner />
      <SubscriptionPlan />
      <Adjustable />
      <Accordion />
      <Devices />
    </div>
  )
}

export default LandingPage
