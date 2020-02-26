import React from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Slider from "react-slick";
import CardCarouselEquipe from "./CardCarouselEquipe";
import "slick-carousel/slick/slick.css";
import "../ImageGallery/ImageGallery.css";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/fold-out-animation';
import 'react-awesome-slider/dist/styles.css';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

import imgChristophe2 from './images/Christophe2.png';
import imgLaurent from './images/Laurent.png';
import imgJen3 from './images/Jen3.png';
import imgYouna from './images/Youna.png';
import imgCaroline from './images/Caroline.png';
import imgJenni from './images/Jenni.png';
import imgGildas from './images/Gildas.png';
import imgGino from './images/Gino.png';
import imgAdrien from './images/Adrien.png';

function CarouselEquipe() {

  const AutoplaySlider = withAutoplay(AwesomeSlider);

  const slider = (
    <AutoplaySlider 
      cssModule={AwesomeSliderStyles}
      play={false}
      interval={8000}
      className='slickEquipe'
      bullets={false}
    >
      <div>
        <CardCarouselEquipe 
          nom={"Laurent Auneau"}
          src={imgLaurent} 
          comp1={'président'}
          comp2={'fondateur'}
          comp3={'directeur'}
        />
      </div>
      <div>
        <CardCarouselEquipe 
          nom={"Christophe Leclerc"}
          src={imgChristophe2} 
          comp1={'direction artistique'}
          comp2={'2D/3D'}
          comp3={'création'}
        />        
      </div>
      <div>
        <CardCarouselEquipe 
          nom={"Jennifer Tressos Walsh"}
          src={imgJen3} 
          comp1={'administration'}
          comp2={'finances'}
          comp3={'RH'}
        />        
      </div>
      <div>
        <CardCarouselEquipe 
          nom={"Youna Petton"}
          src={imgYouna} 
          comp1={'game design'}
          comp2={'dialogues'}
          comp3={'ux/ui design'}
        />        
      </div>
      <div>
        <CardCarouselEquipe 
          nom={"Caroline Hauser"}
          src={imgCaroline} 
          comp1={'création'}
          comp2={'2D/3D'}
          comp3={'ui design'}
        />        
      </div>
      <div>
        <CardCarouselEquipe 
          nom={"Jennifer Retailleau"}
          src={imgJenni} 
          comp1={'2D/3D'}
          comp2={'création'}
          comp3={'ui design'}
        />        
      </div>
      <div>
        <CardCarouselEquipe 
          nom={"Gildas Pierre"}
          src={imgGildas} 
          comp1={'développement JS'}
          comp2={'intégration jeux'}
          comp3={'back-end (avec modération)'}
        />        
      </div>
      <div>
        <CardCarouselEquipe 
          nom={"Gino Urli"}
          src={imgGino} 
          comp1={'développement'}
          comp2={'front-end'}
          comp3={'back-end'}
        />        
      </div>
      <div>
        <CardCarouselEquipe 
          nom={"Adrien Minaire"}
          src={imgAdrien} 
          comp1={'projet'}
          comp2={'scrum'}
          comp3={'...'}
        />        
      </div>
    </AutoplaySlider>
  );

  return (
    <div>
      {slider}
    </div>
  );
}

export default CarouselEquipe;
