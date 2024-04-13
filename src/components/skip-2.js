import React from 'react';
import '../App.css';
import Header from './header';
import runman from '../images/runmann.png';
import { IoIosArrowForward } from "react-icons/io";
import {Link} from 'react-router-dom';
function Skip() {
  return (
    <div className="container">
      <Header />
      <Link to="/signup" className="skip-link">Skip</Link>
      <img src={runman} alt="Logo" />
      <div className="text-skip"> Track Your Goal  </div>
      <div className="text-para-skip">
      Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals
        </div>
        <Link to="/signup" className="skip-link">
    <div className="div-blue-button-skip">
      <div className="div-blue-icon-skip">
        <IoIosArrowForward />
      </div>
    </div>
  </Link>
        {/* <button className="button-blue-skip"></button>*/}
    </div>
  );
}

export default Skip;
