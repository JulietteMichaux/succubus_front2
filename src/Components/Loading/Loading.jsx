import React from 'react';
import Spinner from 'react-spinkit';
import { Row, Grid } from 'react-flexbox-grid';
import { withRouter } from "react-router-dom";
import './Loading.css';

function Loading() {

  const spinner = ( 
    <Spinner 
      name="ball-pulse-rise" 
      color="#A661AF"
      height='250px'
    />
  )

  return (
    <Grid >
      <Row center='xs' middle='xs' className='load' >
        {spinner}
      </Row>  
    </Grid> 
  ) 
}

export default withRouter(Loading);
