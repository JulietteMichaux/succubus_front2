/*global apiurl */
/*global accompagnementid */

import React, {useState, useEffect} from 'react';
import './Accompagnement.css';
import axios from 'axios'
import { Grid, Col, Row} from 'react-flexbox-grid';
import Loading from '../Loading/Loading';

function Accompagnement() {

  // const [datas, setDatas] = useState(null)

  // const getArticle = () => {
  //   // récupérer les ids de tous les articles via l'objet WP post.match.params.id
  //   axios.get(apiurl + 'posts' + accompagnementid)
  //   .then((result) => {
  //     // console.log(result.data)
  //     setDatas(result.data);
  //   })
  // }

  // useEffect(() => {
  //   getArticle()
  // }, []);

  // if(!datas) return <Loading />;

  return (
    // <Grid >
    //   {/* <div dangerouslySetInnerHTML={{__html: datas.title.rendered}} />   */}
    //   <div dangerouslySetInnerHTML={{__html: datas.content.rendered}} />  
    // </Grid>

    <Grid fluid>
      <Row center='xs'>
        <Col>
          <h2>ACCOMPAGNEMENT</h2>
        </Col>
      </Row>
      <Row center='xs'>
        <Col lg={6}>
        Ecouter, comprendre et concevoir avec vous.
        L’accompagnement de ses clients est une dimension primordiale pour Succubus. Et grâce à notre grand âge et notre indéfectible quête de qualité, nous avons mis en place une méthode pour conseiller et proposer la meilleure marche à suivre. 
        Notre formule, façonnée par notre centaine d’expériences passées, s’appuie sur trois axes : la co-conception, la gestion de projet et la post-production.
        </Col>
      </Row>
      <div class="timeline-container">

        <div class="timeline-block timeline-block-right">
          <div class="marker"></div>
          <div class="timeline-content">
            <h3>Creative and design thinking</h3>
            <p>Le recueil des besoins s’effectue durant des ateliers de creative et design thinking. 
            Notre démarche s’appuie sur la méthode de design process dite du « double diamant ». Celle-ci s’échelonne sur deux phases successives de divergence et de convergence (découvrir – définir – développer – délivrer). 
            Ainsi, nous vous sensibilisons à l’engagement utilisateur (cône de transformation en quatre étapes) pour dégager conjointement les contenus pédagogiques et définir les actions concrètes à mener. 
            Notre approche prévoit aussi un suivi de l’efficacité du produit grâce à l’élaboration d’indicateurs clé de performance. A la fin de cette première étape est livrée une version alpha du jeu (game design document, user experience document…). </p>
          </div>
        </div>

        <div class="timeline-block timeline-block-left">
          <div class="marker"></div>
          <div class="timeline-content">
            <h3>Un accompagnement en toute agilité</h3>
            <p>Nous invitons nos clients à une expérience cadrée, qui leur assure une gestion des imprévus. 
            Notre méthodologie éprouvée de conception et de gestion de projets, ainsi que notre implémentation personnelle des méthodes Agile, garantit nos interlocuteurs d’être informés à chaque étape de production. 
            Nous croyons fermement que les échanges fréquents et réguliers renforcent la compréhension des enjeux et des besoins de chacun. C’est pourquoi un point d’avancement est mis place de façon hebdomadaire et une livraison fonctionnelle est effectuée tous les mois. 
            Cette circulation d’informations permet de viser l’excellence en dissipant les incompréhensions et par conséquent de faire des économies. Une version bêta du serious game (production graphique...) est livrée à ce stade-là.  </p>
          </div>
        </div>

        <div class="timeline-block timeline-block-right">
          <div class="marker"></div>
          <div class="timeline-content">
            <h3>Post-production</h3>
            <p>Cette ultime partie du développement du jeu fait se succéder deux phases essentielles. 
            La première concerne les fonctionnalités immuables de l’application ainsi que sa dimension esthétique comme le style et l’intégration de l’interface graphique, l’enregistrement des voix…
            La seconde consiste en l’exécution de tests répétitifs du jeu. De cette manière, notre équipe enregistre les retours des utilisateurs et met en œuvre les ajustements et corrections des bugs et autres anomalies.  
            C’est enfin, après toutes ces étapes, que la version gold du serious game est mise à votre disposition.  </p>
          </div>
        </div>

      </div>
    </Grid>
  );
}
  
export default Accompagnement;  
