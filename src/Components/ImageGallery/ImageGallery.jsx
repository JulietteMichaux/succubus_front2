import React, {useEffect, useState, useRef} from 'react';
import './ImageGallery.css';
import Slider from "react-slick";

// composant 'enfant' qu'on utilisera dans notre composant 'parent' ImageGallery
const ImageSlide = ({item}) => {
  const style={backgroundImage:`url(${item.link})`}
  return (
    <div  key={item.id} style={style} className='slide'>
    </div>
  )
  // return (
  //   <img key={item.id} src={item.link} />
  // )
}

// idem
const ThumbSlide = ({item}) => {
  // utilisation de style={backgroundImage:`url(${item.thumb})`} avec balise style={style} dans la balise div du return (avec div vide), 
  // plutôt que d'utiliser une balise <img src={item.thumb}/> entre les balises div
  const style={backgroundImage:`url(${item.thumb})`}
  return (
    <div key={item.id} style={style} className='slide thumb' >
    </div>
  )
}

// idem
const VideoSlide = ({item, isActive}) => {
  const videoElement = useRef(null);
  useEffect(() => {
    if(isActive) {
      videoElement.current.play()
    } else {
      videoElement.current.pause()
    }  
  }, [isActive]);
  return (
    <div className='slide' >
      <video ref={videoElement} src={item.link} controls />
    </div>)
}

// mon composant 'parent' MyImageGallery (celui qu'on exporte dans FocusJeu)
function MyImageGallery(props) {

  // mes trois hooks
  const [activeSlide, setActiveSlide]= useState(0)
  const [navFor1, setN1]= useState(null)
  const [navFor2, setN2]= useState(null)
  
  // mes deux variables qui contiennent les options des deux sliders
  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // lazyLoad: 'ondemand',
    autoplay: false,
    afterChange: (index) => {
      setActiveSlide(index)
    },
  };

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: false,
    afterChange: (index) => {
      setActiveSlide(index)
    },
  };

  // un map de tous les attachments pour sortir la vidéo ou les images selon le type reconnu
  const slides = props.items.map((item, slideIndex) => {
    if(item.type.includes("video")) {
      return <VideoSlide key={item.id} item={item} isActive={slideIndex === activeSlide} />
    } else {
      return <ImageSlide key={item.id} item={item}  isActive={slideIndex === activeSlide} />
    }    
  })

  // un map sur les thumbs de tous les attachments
  const slidesThumb = props.items.map((item, slideIndex) => {
    return <ThumbSlide key={item.id} item={item} />
  })
   
  return (
    <div>
      <Slider 
        {...settings1} 
        ref={(slider)=>{setN2(slider)}} asNavFor={navFor1}>
        {slides}
      </Slider>
      <Slider 
        {...settings2} 
        ref={(slider)=>{setN1(slider)}} asNavFor={navFor2}>
        {slidesThumb}
      </Slider>
  </div>
  );
}

export default MyImageGallery;
