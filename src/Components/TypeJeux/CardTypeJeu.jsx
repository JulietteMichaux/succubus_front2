import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

function CardTypeJeu(props) {
  return (
    <div>
      <Row >
        <Col lg={6} >
          <img src={props.src}  alt=''/>
        </Col>
        <Col lg={6}>
          <Row lg='center' className='propsText'>
            <Col >
            {props.title}
            </Col>
          </Row>
          <Row className='propsText' >
          <Col className='colonneTextCard' >
            {props.text}
          </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
  
export default CardTypeJeu;
