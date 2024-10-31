import React, { memo } from 'react'
import NavComponent from './NavComponent'
import DestinationSearch from './DestinationSearch';
import DestinationList from './DestinationList';
import FeaturedDestinations from './FeaturedDestinations';
import Benefits from './Benefits';
import Footer from './Footer';

const HomePage = memo(() => {
  return (
    <>
        <NavComponent />
        <DestinationSearch />
        <DestinationList />
        <FeaturedDestinations />
        <Benefits />
        <Footer />
    </>
  )
});

export default HomePage