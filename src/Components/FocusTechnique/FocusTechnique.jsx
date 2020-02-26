/*global apiurl */

import React, {useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import './FocusTechnique.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import axios from 'axios';
import Loading from '../Loading/Loading';

function FocusTechnique(props) {

  const [postDatas, setPostDatas] = useState(null);
  const [ready, setReady] = useState(false);

  const getArticle = () => {
    axios.get(apiurl + `posts?slug=${props.match.params.id}`)
    .then((result) => {
      console.log('RESULT', result.data);
      if (result.data.length === 0) {
        props.history.push('/page404')
        return 
      }
      let res = result.data[0];
      
      setPostDatas(res);
      setReady(true);
  })}

  useEffect(() => {
    getArticle()
  }, []);

  if (!ready) return <Loading />;

  return (
    <div className='divFocTech'>
      <div>
        <NavLink to='/techniques'><i className="fa fa-chevron-left"  style={{fontSize: '20px'}}>RETOUR TECHNIQUE</i></NavLink>
      </div>
      <Grid fluid className='containerFocusTech'>
        <Row center='xs'>
          <Col>
            <h2 
              className='titleFocusTechnique'
              dangerouslySetInnerHTML={{__html: postDatas.title.rendered}} />
          </Col>
        </Row>
        <Row center='xs'>
          <Col xs={8}>
            <p dangerouslySetInnerHTML={{__html: postDatas.content.rendered}} />
          </Col>
        </Row>
        <Row>
          <Col xs={8}>
            <img src={postDatas.detailed_featured_media} rel='noopener' alt=''/>
          </Col>    
        </Row>
      </Grid>
    </div>
    );
  }
  
  export default FocusTechnique;
  