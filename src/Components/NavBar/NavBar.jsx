import React, {useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import './NavBar.css'
import { withRouter } from "react-router-dom";
import { Row, Col } from 'react-flexbox-grid';

import imgLogoSuccubus from './images/logoSuccubus.png';

function NavBar(props) {

  const [onTop, setOnTop ] = useState(true);
  const [isShrinked, setIsShrinked ] = useState(window.innerWidth < 800);
  const [onHome, setOnHome ] = useState(props.location.pathname === '/');

  useEffect(() => {
    setOnHome(props.location.pathname === '/')
  }, [props.location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      if(props.location.pathname === '/') {
        let ypos = window.pageYOffset
        setOnTop(ypos === 0);
      }      
    }; 
    window.addEventListener('scroll', handleScroll)
      return (() => {
        window.removeEventListener('scroll', handleScroll);
      })
  })
    
  useEffect(() => {    
    const handleWindowResize = () => {
      setIsShrinked(window.innerWidth < 1400);
    };    
    window.addEventListener('resize', handleWindowResize);
      return () => {            
        window.removeEventListener('resize', handleWindowResize);      
      }  
  }, []);

  let isReduced = !onTop || isShrinked || !onHome

  const className = isReduced? 'reducedNavBar' : 'navBar';
  
  return (
    <div className={className}>
     {isReduced?
      <div>
        <Row middle='lg' center='xs' between='lg'>
          <Col lg={4}>
          </Col>
          <Col xs={12} lg={4} >
            <NavLink to='/'  className='logoSuccubusReduced'><img src={imgLogoSuccubus} alt=''/></NavLink>
          </Col>
          <Col xs={12} lg={4} >
            <NavLink activeClassName='active-link' to='/portfolio'>Portfolio</NavLink>
            <NavLink activeClassName='active-link' to='/accompagnement'>Accompagnement</NavLink>
            <NavLink activeClassName='active-link' to='/techniques'>Technique</NavLink>
            <NavLink activeClassName='active-link' to='/contact'>Contact</NavLink>
          </Col>
        </Row>
      </div> 
      :
      <div>
          <ul>
            <li><NavLink activeClassName='active-link' to='/'>Home</NavLink></li>
            <li><NavLink activeClassName='active-link' to='/portfolio'>Portfolio</NavLink></li>
            <li><NavLink activeClassName='active-link' to='/accompagnement'>Accompagnement</NavLink></li>
            <li><NavLink activeClassName='active-link' to='/techniques'>Technique</NavLink></li>
            <li><NavLink activeClassName='active-link' to='/contact'>Contact</NavLink></li>
          </ul>
      </div>
     }   
    </div>
  )
};

export default withRouter(NavBar);
