import React from 'react';
import './Portfolio.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { NavLink } from "react-router-dom";

function CardPortfolio(props) {

  return (
    <Grid>
      <NavLink to={`/focusjeu/${props.postslug}`}>
        <Row className='rowCardPortf'>
          <Col xs={6} className='colImageJeu'>
            <div 
              style={{backgroundImage: `url(${props.src})`}} 
              className='imgCardPortf' />
          </Col>
          <Col xs={6} >
            <h3 className='titleCardPortf'
              dangerouslySetInnerHTML={{__html: props.titre}} />     
            <p className='textCardPortf'
              dangerouslySetInnerHTML={{__html: props.extrait}} />
          </Col>
        </Row>
      </NavLink>
    </Grid>
  );
}
  
export default CardPortfolio;
