import React from 'react';
import '../App.css';
import Header from './header';
import bicycle from '../images/bicycle.png';
import { IoIosArrowForward } from "react-icons/io";
// import { Outlet, Link } from "react-router-dom";
import {Link} from 'react-router-dom';
function Skip() {
  return (
    <div className="container">
      <Header />
      <Link to="/signup" className="skip-link">Skip</Link>
      <img src={bicycle} alt="Logo" />
      <div className="text-skip"> Get Burn  </div>
      <div className="text-para-skip">
        Let's keep burining to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever.
        </div>
        <div className="transition-bubble">
  <Link to="/skip2" className="skip-link">
    <div className="div-blue-button-skip">
      <div className="div-blue-icon-skip">
        <IoIosArrowForward />
      </div>
    </div>
  </Link>
</div>
      
    </div>
  );
}

export default Skip;
