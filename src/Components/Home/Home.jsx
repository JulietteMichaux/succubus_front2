import React from 'react';
import './Home.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import PortfolioButton from '../PortfolioButton/PortfolioButton';
import CarouselHome from '../CarouselHome/CarouselHome';
import LeJeuSerieux from '../LeJeuSerieux/LeJeuSerieux';
import TypeJeux from '../TypeJeux/TypeJeux';
import Equipe from '../Equipe/Equipe';
import Clients from '../Clients/Clients';

function Home() {
  return (
    <div className='home'>
      <Grid fluid className='contHome'>
        <Row center='xs' className='titleHome'>
          <h2>LE STUDIO</h2>
        </Row>
        <Row middle='xs' center='xs' className='introHome' >
          <Col xs={8} lg={4} lgOffset={3}>
            <p>Graphisme, technique, pédagogie et accompagnement.</p>
            <p>Succubus Interactive connaît la recette pour atteindre l’objectif de ses clients.</p>
            <p>Pionnier européen du serious game depuis 2002, le studio mise sur une complémentarité des compétences en mettant son expertise technique au service de l’expertise métier.</p>
            <p>Fruit d’une longue expérience, notre savoir-faire nous distingue.</p>
          </Col>
          <Col xs={12} lg={2} lgOffset={1}>
            <PortfolioButton />
          </Col>
        </Row>
      </Grid>
      <div>
        <CarouselHome />
      </div>
      <div>
        <LeJeuSerieux />
      </div>
      <div>
        <TypeJeux />
      </div>
      <div>
        <Equipe />
      </div>
      <div >
        <Clients />
      </div>
    </div>
  );
}

export default Home;
