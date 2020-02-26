import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import './Equipe.css';

function CardCarouselEquipe(props) {

  return(
    <Row middle='xs'>
      <Col>
        {props.nom}
      </Col>
      <Col>
        <img src={props.src}/>
      </Col>
      <Col >
        <Row>
          <Col>
            {props.comp1}
          </Col>
        </Row>
        <Row>
          <Col>
            {props.comp2}
          </Col>
        </Row>
        <Row>
          <Col>
            {props.comp3}
          </Col>
        </Row>
      </Col>
    </Row> 
  )  
}

export default CardCarouselEquipe;
