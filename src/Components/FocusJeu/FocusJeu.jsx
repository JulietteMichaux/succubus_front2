/*global apiurl */

import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import './FocusJeu.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import axios from 'axios';
import Loading from '../Loading/Loading';
import MyImageGallery from '../ImageGallery/ImageGallery';

function FocusJeu(props) {

  const [postDatas, setPostDatas] = useState(null);
  const [ready, setReady] = useState(false);
  const [category, setCategory] = useState(null);

  const getArticle = () => {
    axios.get(apiurl + `posts?slug=${props.match.params.id}`)
    .then((result) => {
      if (result.data.length === 0) {
        props.history.push('/page404')
        return 
      }
      let res = result.data[0];
      setPostDatas(res);
      const goodCategory = res.detailed_categories.filter(categ => {
        if (categ.term_id !== 9) {
        return (categ.term_id)
        } 
      })
      setCategory(goodCategory[0]);
      setReady(true);
  })}

  useEffect(() => {
    getArticle()
  }, []);

  if (!ready) return <Loading />;

  const textPlatforms = postDatas.detailed_platforms.map(platform => {
    return (
      platform.name
    )
  }).join(", ");

  const text_dates_de_sortie = postDatas.detailed_dates_de_sortie.map(date_de_sortie => {
    return (
      date_de_sortie.name
    )
  }).join(", ");
 
  return (
    <Grid fluid >
      <Row className='rowBoutonPortfFocusJeu'>
        <NavLink to='/portfolio'><i className="fa fa-chevron-left" style={{fontSize: '20px'}} >PORTFOLIO</i></NavLink>
      </Row>
      <Grid className='contJeu'>
        <Row>
          <Col xs={12} lg={6}>
            <MyImageGallery 
              items={postDatas.detailed_attachments}
            />
          </Col>
          <Col xs={12} lg={6}>
            <h2 className='titleJeu'
            dangerouslySetInnerHTML={{__html: postDatas.title.rendered}}/>
            <Row center='xs'>
              <Col xs={4} className='rowsSpecificities'>
                <h4>
                  Catégorie
                </h4>
                 {category && <p dangerouslySetInnerHTML={{__html: category.name}} />}
              </Col>
              <Col xs={4} className='rowsSpecificities'>
                <h4>
                  Plateforme
                </h4>
                <p dangerouslySetInnerHTML={{__html: textPlatforms}} />
              </Col>
              <Col xs={4} className='rowsSpecificities'>
                <h4>
                  Sortie
                </h4>
                <p>
                 {text_dates_de_sortie}
                </p>
              </Col>
            </Row>
            <Row center='xs'>
              <Col >
                <a href='#' /><button className='jouer'>JOUER</button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row >
          <h3>
            RESUME
          </h3>
        </Row>
        <Row >
          <div dangerouslySetInnerHTML={{__html: postDatas.content.rendered}} />
        </Row>
      </Grid>
    </Grid>
  );
}
  
export default FocusJeu;
