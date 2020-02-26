/*global apiurl */

import React, {useState, useEffect } from 'react';
import './Techniques.css';
import { Col, Grid, Row } from 'react-flexbox-grid';
import CardTechniques from './CardTechniques';
import axios from 'axios';
import Loading from '../Loading/Loading';

function Techniques() {

  const [articles, setArticles] = useState(null)
  const [medias, setMedias] = useState(null)

  const getArticles = () => {
    axios.get(apiurl + `posts?categories=50`)
    .then((result) => {
      const ids = result.data.map(article => {
        return article.featured_media
      }).join(",")
      getMedias(ids);
      setArticles(result.data);
    })
  }
   
  const getMedias = (ids) => {
    axios.get(apiurl + `media?include=${ids}`) 
    .then((result) => {
      setMedias(result.data);
    })
  }

  useEffect(() => {
    getArticles()
  }, []);

  if(!medias) return <Loading />;

  const rows = articles.map(article => {
    let goodmedia = null;
    medias.forEach(media => {
      if(media.id === article.featured_media) {
        goodmedia=media
      }
    })
      return (
        <Row key={article.id} >
          <Col xs={12}>
            <CardTechniques
              postslug={article.slug}
              titre={article.title.rendered}
              extrait={article.excerpt.rendered} 
              src={goodmedia.link}
            />
          </Col>
        </Row>
      )
  })

  return (
    <Grid fluid >
      <Row center='xs'>
        <Col >
          <h3 className='textPageTechn'>
            TECHNIQUE
          </h3>
        </Col>
      </Row>
      {rows}
    </Grid>
    );
  }
  
  export default Techniques;
  