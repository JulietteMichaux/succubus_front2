/*global apiurl */

import React, {useState, useEffect } from 'react';
import './Portfolio.css';
import { Row, Grid, Col } from 'react-flexbox-grid';
import CardPortfolio from '../Portfolio/CardPortfolio';
import CardPortfolio2 from '../Portfolio/CardPortfolio2';
import axios from 'axios';
import Loading from '../Loading/Loading';

function Portfolio() {

  const [articles1, setArticles1] = useState(null);
  const [medias1, setMedias1] = useState(null);
  const [articles2, setArticles2] = useState(null);
  const [medias2, setMedias2] = useState(null);

  const getArticles1 = (id) => {
    axios.get(apiurl + `posts?categories=${id}`)
    .then((result) => {
      const ids = result.data.map(article => {
        return article.featured_media
      }).join(",")
      getMedias1(ids);
      setArticles1(result.data);
    })
  }
   
  const getMedias1 = (ids) => {
    axios.get(apiurl + `media?include=${ids}`) 
    .then((result) => {
      setMedias1(result.data);
    })
  }

  const getArticles2 = (id) => {
    axios.get(apiurl + `posts?categories=${id}`)
    .then((result) => {
      const ids = result.data.map(article => {
        return article.featured_media
      }).join(",")
      getMedias2(ids);
      setArticles2(result.data);
    })
  }
   
  const getMedias2 = (ids) => {
    axios.get(apiurl + `media?include=${ids}`) 
    .then((result) => {
      setMedias2(result.data);
    })
  }

  useEffect(() => {
    getArticles1(9)
    getArticles2(108)
  }, []);

  if(!(medias1 && medias2)) return <Loading />

  const rows1 = articles1.map(article => {
      let goodmedia = null;
      medias1.forEach(media => {
        if(media.id === article.featured_media) {
          goodmedia=media
        }
      })
        return (
          <Row key={article.id} >
            <Col xs={12}>
              <CardPortfolio
                postslug={article.slug}
                titre={article.title.rendered}
                extrait={article.excerpt.rendered} 
                src={goodmedia.link}
              />
            </Col>
          </Row>
        )
  })

  const rows2 = articles2.map(article => {
    let goodmedia = null;
    medias2.forEach(media => {
      if(media.id === article.featured_media) {
        goodmedia=media
      }
    })
      return (
        <Col key={article.id} xs={6} lg={4} >
          <CardPortfolio2
            postslug={article.slug}
            titre={article.title.rendered}
            extrait={article.excerpt.rendered} 
            src={goodmedia.link}
          />
        </Col>
      )
  })

  return (
    <Grid>
      <Row center='xs'>
        <Col lg={6} xs={10}>
          <h2>
            NOS JEUX
          </h2>
        </Col>
      </Row>
      {rows1}
      <Row>
        {rows2}
      </Row>
    </Grid>
  );
}
 
export default Portfolio;
