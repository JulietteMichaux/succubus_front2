import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/fold-out-animation';
import 'react-awesome-slider/dist/styles.css';
import './CarouselHome.css';

import imgBrigadeCommissariat from './images/brigadecommissariat1.jpg';
import imgBrigade from './images/brigadegood1.jpg';
import imgCovea from './images/coveagood1.jpg';

function CarouselHome() {
  
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  const slider = (
    <AutoplaySlider
      cssModule={AwesomeSliderStyles}
      play={false}
      cancelOnInteraction={true}
      interval={2000}
      bullets={false}
    >
      <div data-src={imgBrigadeCommissariat} />
      <div data-src={imgCovea} />
      <div data-src={imgBrigade} />
    </AutoplaySlider>
  );

  return (
    <div>
      {slider}
    </div>
  )
}
  
export default CarouselHome;
  