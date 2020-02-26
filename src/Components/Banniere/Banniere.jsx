import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Banniere.css';

function Banniere() {
  
  return (
    <Grid fluid className='containerBanniere'>
      <Row around='xs'>
        <Col>
          Fondé en 2002
        </Col>
        <Col>
          Plus de 8 trophées
        </Col>
        <Col>
          Plus de 100 jeux
        </Col>
      </Row>
    </Grid>
    );
  }
  
  export default Banniere;
  