import React from 'react';
import { NavLink } from "react-router-dom";
import './Techniques.css';
import { Col, Grid, Row } from 'react-flexbox-grid';

function CardTechniques(props) {
  return (
    <Grid fluid >
      <Row middle='xs'  className='rowTech'>
        <Col xs={12} lg={9}>
          <Row>
            <Col>
              <p dangerouslySetInnerHTML={{__html: props.extrait}} />
            </Col>
          </Row>
        </Col>
        {/* <Col xs={10} lg={4}>
          <p dangerouslySetInnerHTML={{__html: props.texte}} />
        </Col> */}
        <Col xs={12} lg={3}>
          <Row end='xs'>
            <Col>
              <NavLink to={`/focustechnique/${props.postslug}`} className='ensavoirplus'>
                En savoir plus
              </NavLink>
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  );
}

export default CardTechniques;
