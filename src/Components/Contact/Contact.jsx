import React from 'react';
import './Contact.css';
import { withRouter } from "react-router-dom";
import { Col, Grid, Row } from 'react-flexbox-grid';
import ContactMap from './Map';
import Newsletter from './Newsletter';

import imgInstagram from './images/instagram-2-1.svg';
import imgLinkedin from './images/linkedin-icon-rond.svg';
import imgTwitter from './images/twitter-3-rond.svg';
import imgFacebook from './images/facebook-3.svg';

function Contact() {
  return (
    <Grid fluid>
      <Row center='xs'>
        <h2>
          CONTACTEZ-NOUS
        </h2>
      </Row>
      <Row around='xs' className='rowAddressNewsletter'>
        <Col>
          <Row center='xs'>
            <Col >
              <p>Succubus Interactive</p>
              <p>46 rue de Strasbourg</p>
              <p>44000 Nantes</p>
              <p>02 51 13 46 96</p>
              <p><a href='#'>contact@succubus.fr</a></p>
              <p><a href='#'>job@succubus.fr</a></p>
              <p><a href='#'>stage@succubus.fr</a></p>
            </Col>
          </Row>
          <Row center='xs'>
            <Col>
              <ContactMap />
            </Col>
          </Row>
        </Col>
        <Col>
          <Newsletter />
        </Col>
      </Row>
      <Row center='xs'>
        <h4>
          Suivez-nous sur les réseaux sociaux
        </h4>
      </Row>
      <Row center='xs' className='rowNetwork'>
        <Col >
          <a href='https://www.instagram.com/' target='_blank' rel='noopener'><img src={imgInstagram} className='sizeImage'  alt=''/></a>
          <a href='https://www.linkedin.com/' target='_blank' rel='noopener'><img src={imgLinkedin} className='sizeImage'  alt='' /></a>
          <a href='https://twitter.com/' target='_blank' rel='noopener'><img src={imgTwitter} className='sizeImage' alt='' /></a>
          <a href='https://www.facebook.com/' target='_blank' rel='noopener'><img src={imgFacebook} className='sizeImage' alt=''/></a>
        </Col>
      </Row>
    </Grid>
  );
}
  
export default withRouter(Contact);
