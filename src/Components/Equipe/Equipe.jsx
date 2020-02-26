import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import './Equipe.css';
import CarouselEquipe from './CarouselEquipe';
import Banniere from '../Banniere/Banniere';

function Equipe() {
  return(
      <div>
        <Row  center='xs' >
          <Col xs={12}>
            <h2 >Qui sommes-nous?</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Banniere />
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={6} lgOffset={3}>
            <p>
              Entreprise ambitieuse avec à son actif la réalisation de plus de cent serious games, Succubus Interactive a su prouver son savoir-faire.  
            </p> 
            <p>
              Impliqué dans de multiples programmes internationaux de recherche et développement (Horizon 2020, Erasmus+), la qualité de ses productions 
              a en outre permis à l'entreprise 
              de recevoir 8 trophées (pour 11 nominations).
            </p>
            <p>
              Experte, flexible, souriante, dynamique, soudée… notre équipe a de la bonne humeur et de la créativité à revendre. 
              Et ce n’est pas parce que nous travaillons dans une bonne ambiance que nous en oublions de livrer des produits sur-mesure 
              dans les temps et à des coûts maîtrisés.
            </p>
          </Col>
        </Row>
          <Col>
            <CarouselEquipe />
          </Col>
      </div>
  )  
}

export default Equipe;
