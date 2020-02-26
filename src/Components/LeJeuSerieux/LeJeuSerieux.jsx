import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './LeJeuSerieux.css';
import PortfolioButton from '../PortfolioButton/PortfolioButton';

import imgMachineCafe from './images/MachineCafe1200cut.jpg';

function LeJeuSerieux() {
  return (
    <Grid fluid className='containerJeuSerieux'>
      <Row className='rowSerieux' middle='xs' center="xs">
        <Col xs={12} lg={6} className='coltext'>
          <Row>
            <Col lg={11}>
              <h2>LE SERIOUS GAME</h2>
              <p className="card-sub-title">
                Savant mélange de fun et de pédagogie, le serious game est une activité engageante, stimulante et formatrice.  
              </p>
              <p>
                Inspiré de la pédagogie active, reproduisant les mécanismes de l’industrie vidéoludique et utilisant le plus 
                souvent les nouvelles technologies, son objectif est avant tout d’enrichir par le biais d’une expérience interactive. 
              </p>
              <p>
                Le serious game intéresse majoritairement les entreprises mais aussi le grand public. Aujourd'hui, il est largement validé 
                par les institutions car il touche de vastes domaines : formation, soft skills, prévention, marketing, sensibilisation, assessment… 
              </p>
              <p>
                En résumé, avec le serious game, l’utilisateur apprend et comprend avec plaisir. 
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={10} xsOffset={2}>
              <h5>
                "Tu me dis, j’oublie. Tu m’enseignes, je me souviens. Tu m’impliques, j’apprends."
              </h5>
            </Col>
          </Row>
          <Row>
            <Col xs={10} xsOffset={3}>
              <h5>
                Xun Zi, penseur chinois confucianiste (citation apocryphe de Benjamin Franklin). 
              </h5>
            </Col>
          </Row>
        </Col>
        <Col xs={12} lg={6} className='colimage'>
          <img src={imgMachineCafe} alt='dialogue' className='dialoguephoto'/>
        </Col>
      </Row>
      <Row center='xs'>
        <Col lg={1} lgOffset={10} xs={12} md={12} >
          <PortfolioButton />
        </Col>
      </Row>
    </Grid>
    );
  }
  
  export default LeJeuSerieux;
  