import React from 'react';
import './Portfolio.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { NavLink } from "react-router-dom";

function CardPortfolio2(props) {

  return (
    <Grid className='smallCard'>
      <NavLink to={`/focusjeu/${props.postslug}`} >
        <Row xs='center'>
          <Col xs={12}>
            <img src={props.src} className='smallCardImg'/>
          </Col>
        </Row>
        <Row center='xs'>
          <Col xs={12} >
            <h3 
              dangerouslySetInnerHTML={{__html: props.titre}} className='smallCardTitle'/>     
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <p className='textCardPortf'
              dangerouslySetInnerHTML={{__html: props.extrait}} />
          </Col>
        </Row>
      </NavLink>
    </Grid>
  );
}
  
export default CardPortfolio2;
