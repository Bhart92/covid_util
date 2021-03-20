import React, {Fragment} from 'react';
import LocationInput from '../location/LocationInput';

const LandingPage = () => {
  return (
    <div className='landing'>
      <div className='landing--location-container'>
      <img src='./assets/virus.png' />
        <LocationInput />
      </div>
    </div>

  );
};


export default LandingPage;