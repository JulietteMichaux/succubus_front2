import React from 'react';
import './App.css';
import { Route, withRouter, Redirect, Switch } from "react-router-dom";
// import { withRouter, Redirect, Switch } from "react-router-dom";
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Portfolio from './Components/Portfolio/Portfolio';
import Techniques from './Components/Techniques/Techniques';
import Accompagnement from './Components/Accompagnement/Accompagnement';
import Contact from './Components/Contact/Contact';
import FocusJeu from './Components/FocusJeu/FocusJeu';
import FocusTechnique from './Components/FocusTechnique/FocusTechnique';
import Page404 from './Components/Page404/Page404';


function App(props) {

  const isShowing = props.location.pathname !== '/contact' && props.location.pathname !== '/loading';

  return (
    <div className="App">
      <div className='header'>
        <NavBar />
      </div>
      <div className='main'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/navbar' component={NavBar} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/focusjeu/:id' component={FocusJeu} />
          <Route exact path='/techniques' component={Techniques} />
          <Route exact path='/focustechnique/:id' component={FocusTechnique} />
          <Route exact path='/accompagnement' component={Accompagnement} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/page404' component={Page404} />
          {/* <Redirect to="/page404" /> */}
        </Switch>
      </div>
      { isShowing && 
        <div className='footer'>
          <Footer />
        </div>}
    </div>
  );
}

export default withRouter(App);
