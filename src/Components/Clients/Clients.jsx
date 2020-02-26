import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import './Clients.css';

import imgAxa from './images/axa-768.svg';
import imgSanofi from './images/sanofi-2011-logo.svg';
import imgLaPoste from './images/la-poste-3.svg';
import imgEdf from './images/edf-2.svg';
import imgFrance3 from './images/france-3-tv-1.svg';
import imgColgate from './images/colgate-2.svg';
import imgTotal from './images/total-3.svg';
import imgGoetheInstitut from './images/goethe-institut.svg';
import imgOrange from './images/orange-3.svg';
import imgVeolia from './images/veolia.svg';
import imgFerrero from './images/ferrero-1.svg';
import imgGmf from './images/gmf-groupe.svg';
import imgAirbus from './images/airbus-2.svg';
import imgSG from './images/societe-generale.svg';

function Clients() {
  return(
    <div className='clients'>
      <Row center='xs'>
        <h2>Nos clients</h2>
      </Row>
      <Row around='xs'>
        <Col >
          <img src={imgAxa} alt=''/>
        </Col>
        <Col >
          <img src={imgSanofi}  alt=''/>
        </Col>
        <Col >
          <img src={imgLaPoste}  alt=''/>
        </Col>
        <Col >
          <img src={imgEdf} className='edf'  alt=''/>
        </Col>
        <Col >
          <img src={imgFrance3}  alt=''/>
        </Col>
        <Col >
          <img src={imgColgate} className='centeredIcon'  alt=''/>
        </Col>
        <Col >
          <img src={imgTotal}  alt=''/>
        </Col>
      </Row>
      <Row around='xs'>
        <Col  >
          <img src={imgGoetheInstitut}  alt=''/>
        </Col>
        <Col >
          <img src={imgOrange}  alt='' />
        </Col>
        <Col >
          <img src={imgVeolia} className='centeredIcon'  alt=''/>
        </Col>
        <Col >
          <img src={imgFerrero}  alt=''/>
        </Col>
        <Col >
          <img src={imgGmf}  alt=''/>
        </Col>
        <Col >
          <img src={imgAirbus} className='centeredIcon'  alt=''/>
        </Col>
        <Col >
          <img src={imgSG}  alt=''/>
        </Col>
      </Row>
    </div>
  )  
}

export default Clients;
