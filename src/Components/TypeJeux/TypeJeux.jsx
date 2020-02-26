import React from 'react';
import { Row, Col, Grid } from 'react-flexbox-grid';
import './TypeJeux.css';
import CardTypeJeu from './CardTypeJeu';

import imgCovea from './images/covea640.2.jpg';
import imgLegends from './images/legendsofeurope640.jpg';
import imgBrigade from './images/brigade640.2.jpg';
import imgIndustryRace from './images/industryrace640.jpg';

function TypeJeux() {
  return (
      <Grid fluid className='contTypeJeux'>
        <Row center='xs' className='les4typesjeux'>
          <h2>LES TYPES DE JEUX</h2>
        </Row>
        <Row center='xs'>
          <Col lg={6} xs={8}>
            <CardTypeJeu 
              title={'SIMULATION DE DIALOGUE'}
              text={`Les scripts réalistes déployés par nos experts en game design reposent sur une arborescence décisionnelle. Chaque solution choisie par l’apprenant 
              peut en outre opérer des branchements conditionnels. L’impact sur le déroulé du serious game se révèle, au choix, immédiatement ou a posteriori. 
              Outre l’utilisation de la pédagogie par l’erreur, nous intégrons au dialogue des feed-back, grâce auxquels l’apprenant peut constater sa progression. `}
              src={imgCovea} />
          </Col>
          <Col lg={6} xs={8}>
            <CardTypeJeu 
              title={'QUIZ GAMIFIÉ'} 
              text={`Variation du jeu de société ou du traditionnel question à choix multiples, le quiz gamifié propose des règles simples.
              Sa perspective interactive et divertissante engage l’apprenant à aller jusqu’au bout du module. Le quiz peut parfois même être rejoué. 
              Succubus a recours à divers leviers ludiques pour motiver l’apprenant : jeux de dés, bonus, scoring, badges, intervention de personnages…
              Ce type de jeu renforce la motivation et peut revaloriser rapidement vos données métiers.  `}
              src={imgLegends}/>
          </Col>
        </Row>
        <Row center='xs'>
          <Col lg={6} xs={8}>
            <CardTypeJeu 
              title={'JEU DE RÔLE'} 
              text={`Fréquemment utilisé dans les serious games de sensibilisation, le jeu de rôle place l’apprenant au centre d’une histoire dont il est le héros. 
              Contrairement à d’autres types de jeu, il n’y a pas de bonnes ou de mauvaises réponses. Le récit progresse au gré des décisions prises et des énigmes déjouées par l’utilisateur. 
              Et il peut en éprouver les conséquences. Il s’agit d’une mise en situation qui prend appui sur une narration non linéaire et s’inscrit dans des scénarios d’enquêtes, 
              de découvertes ou d’escape games. `}
              src={imgBrigade}/>
          </Col>
          <Col lg={6} xs={8}>
            <CardTypeJeu 
              title={'JEU DE STRATÉGIE'} 
              text={`Exercice idéal pour l’entraînement à la gestion, le jeu de stratégie simule le cycle de vie d’une entreprise et a cet avantage que l’apprenant a droit à l’erreur. 
              Ce divertissement l’engage à manier - et remanier - une boucle de gameplay.
              Ainsi, pour obtenir le meilleur score, il devra apprendre à gérer son temps et ses ressources, 
              consulter des indicateurs, prendre des décisions (recruter, former…), modifier des paramètres et choisir ses investissements.`}
              src={imgIndustryRace}/>
          </Col>
        </Row>
      </Grid>
  );
}
  
export default TypeJeux;
