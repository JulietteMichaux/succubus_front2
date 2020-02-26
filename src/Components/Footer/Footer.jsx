import React from 'react';
import './Footer.css';
import { Grid, Row, Col } from 'react-flexbox-grid';

import imgInstagram from './images/instagram-2-1.svg';
import imgLinkedin from './images/linkedin-icon-rond.svg';
import imgTwitter from './images/twitter-3-rond.svg';
import imgFacebook from './images/facebook-3.svg';

function Footer() {
  return (
    <Grid fluid className="containerFooter">
      <Row middle='xs' around='xs' className='rowFooter'>
        <Col xs={12} lg={4}>
          <Row center='xs'>
            <Col>
              <div className='colFormFooter'>
                <h6>
                  NEWSLETTER
                </h6>
                    <div>
                      <label htmlFor="e-mail">
                          Pour recevoir des informations sur nos derniers projets
                      </label>
                    </div>
                    <input id="e-mail" placeholder="votre e-mail" type="text" />
                  <div>
                    <div>
                      <input id="cocher" type="checkbox" tabIndex="0" className="active" />
                      <label htmlFor="cocher">J'accepte les termes et conditions</label>
                    </div>
                  </div>
                  <div className='rowButtonFooter'>
                    <a href='#'>
                      <button>
                        C'est parti!
                      </button>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
        </Col>
        <Col xs={12} lg={4}>
          <Row center='xs'>
            <Col>
              <p>Succubus Interactive</p>
              <p>46 rue de Strasbourg</p>
              <p>44000 Nantes</p>
              <p>02 51 13 46 96</p>
            </Col>
          </Row>
        </Col>
        <Col xs={12} lg={4}>
          <Row center='xs'>
            <Col>
              <a href='https://www.instagram.com/'  ><img src={imgInstagram} className='sizeImage'  alt=''/></a>
              <a href='https://www.linkedin.com/' ><img src={imgLinkedin} className='sizeImage'  alt='' /></a>
              <a href='https://twitter.com/' ><img src={imgTwitter} className='sizeImage' alt='' /></a>
              <a href='https://www.facebook.com/' ><img src={imgFacebook} className='sizeImage' alt=''/></a>
            </Col>
          </Row>
        </Col>
      </Row >
    </Grid>
  );
}
  
export default Footer;
