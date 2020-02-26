import React from 'react';
import { NavLink } from "react-router-dom";
import './PortfolioButton.css';

function PortfolioButton() {
    return (
      <div >
        <NavLink to='/portfolio' className='buttonPort'>
          PORTFOLIO
        </NavLink>
      </div>
    )
  }
  
export default PortfolioButton;
