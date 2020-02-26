/*global apiurl */

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Posts() {
  
  const [datas, setDatas] = useState([])
  
  // je déclare une variable qui récupère tous les posts de WP
  const getArticles = () => {
    axios.get(apiurl + `posts`)
    .then((result) => {
      console.log(result.data)
      // je set la variable d'état datas avec toutes ces datas
      setDatas(result.data);
    })
  }
  
  // j'exécute une fois (like ComponentDidMount) la variable getArticles au 1er montage du composant Posts
  useEffect(() => {
    getArticles()
  }, []);
  
  return (
    <div>
      {/* je boucle sur la variable d'état datas pour faire un tableau de chaque data */}
      {datas.map(data => (
        <div>
          {/* que j'affiche avec une liste (ul/li) des titres avec le lien url équivalent à la <Route path='/post/:id'. */}
          <ul>
            <li>
              <Link to={'/post/'+data.id}>{data.title.rendered}</Link>
            </li>
          </ul>
        </div>
      ))}  
    </div>
   );
}
    
export default Posts;
    