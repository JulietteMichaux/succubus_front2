import React from 'react';
import './Contact.css';
import { Col, Row, Grid } from 'react-flexbox-grid';

function Newsletter() {
  return(
    <Grid fluid className='newsletterContact' >
      <Row center='xs'>
        <Col >
          <h4>
            NEWSLETTER
          </h4>
        </Col>
      </Row>
      <Row  className='envelope' center='xs'>
        <Col>
          <i className="fa fa-envelope-open-o" aria-hidden="true" style={{fontSize:'200px', color: 'rgba(255, 255, 255, .1)'}}></i>
        </Col>
      </Row>
      <Row className='e-mail' center='xs'>
        <Col className='labelInfos'>
          <label htmlFor="e-mail" >
            Pour recevoir des informations sur nos derniers projets
          </label>
        </Col>
      </Row>
      <Row center='xs'>
        <Col className='email'>
          <input id="e-mail" placeholder="votre e-mail" type="text" className='input-e-mail' />
        </Col>
      </Row>    
      <Row className='checkbox' center='xs'>
        <Col>
          <input id="cocher" type="checkbox" tabindex="0" className="active" />
          <label htmlFor="cocher">J'accepte les termes et conditions</label>
        </Col>
      </Row>
      <Row center='xs'>
        <Col>
          <a href='#'>
            <button className='boutonNewsletter'>
              C'est parti!
            </button>
          </a>
        </Col>
      </Row>
    </Grid>
  )
}

export default Newsletter;
