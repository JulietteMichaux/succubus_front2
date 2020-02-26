/*global apiurl */

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Post(props) {
  console.log('PROPS', props)
  
  const [datas, setDatas] = useState(null)
  const [media, setMedia] = useState(null)
  const [ready, setReady] = useState(false);

  const getArticle = () => {
    // On récupère l'id d'un post via get '...v2/posts/props/match/params.id'. On a trouvé le chemin dans l'objet JSON de l'url:'localhost:3000/post/338'
    axios.get(apiurl + `posts/${props.match.params.id}`)
    .then((result) => {
      console.log(result.data)
      // on récupère les datas du axios.get et on set la variable d'état datas.
      setDatas(result.data);
      // Je donne à la fonction getMedia l'argument result.data.featured_media. Revient à dire : let id (de getMedia en ligne23) = result.data.featured_media
      getMedia(result.data.featured_media);
    })
  }
  
  // je passe en param id à la fonction getMedia
  const getMedia = (id) => {
    // qui va chercher un media via son id dans l'API Rest WP
    axios.get(apiurl + `media/${id}`)
    .then((result) => {
      // je check ce que je reçois dans la console
      console.log(result.data)
      // je set la variable d'état media avec l'idMedia
      setMedia(result.data);
      // je set la variable d'état ready à true
      setReady(true);
    })
  }

  // j'exécute la fonction getArticle dans un useEffet qui est rendue juste une fois (as componentDidMount)
  useEffect(() => {
    getArticle()
  }, []);

  return (
    <div>
        {/* si variable d'état est false (avant l'exécution du useEffect avec les datas de getArticle, alors j'affiche à l'écran 'chargement') sinon j'affiche les datas suivantes*/}
        {!ready && "chargement"}
        {/* quand variable d'état ready est true (cad après l'exécution de getArticle dans le useEffect, alors je lis 3 données ciblées et les affiche */}
        {ready && <div dangerouslySetInnerHTML={{__html: datas.title.rendered}} />}
        {ready && <div dangerouslySetInnerHTML={{__html: datas.content.rendered}} />}
        {ready && <img src={media.link}  alt=''/>}
    </div>
  );
}

export default Post;
