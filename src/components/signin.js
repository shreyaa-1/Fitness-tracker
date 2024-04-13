import React from 'react';
// import '../signup.css';
import Header from './header';
import bicycle from '../images/bicycle.png';
import {Link} from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { FaGoogle, FaFacebook } from 'react-icons/fa'; // Import Google and Facebook icons

function Signup() {
  return (
    <div className="container">
    
    <div  style={{ backgroundColor: 'white', padding: '20px 10px', margin: '10px 0', borderRadius: '5px', letterSpacing: '1px' }}>
  <div> <Header /> </div>   

      <form method="get" target="_blank">
        <h2 style={{ fontFamily: 'Arial' }}>
          Welcome Back
        </h2>
        <div style={{ paddingBottom: '10px' }}>
          <label htmlFor="userId" style={{ fontFamily: 'Arial', fontSize: '85%', fontWeight: 'bold', color: 'rgb(85, 78, 78)' }}>
           
          </label> <br />
          <input
            type="email"
            id="userId"
            name="userName"
            placeholder="Email"
            style={{ width: '100%', padding: '15px 15px', margin: '5px 0', border: '1px solid white', backgroundColor:"#F1F1F1", borderRadius: '4px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ paddingBottom: '20px' }}>
          <label htmlFor="pass" style={{ fontFamily: 'Arial', fontSize: '85%', fontWeight: 'bold', color: 'rgb(85, 78, 78)' }}>
            
          </label> <br />
          <input type="password" id="pass" name="parola" placeholder="Password" required style={{ width: '100%', padding: '15px 15px', margin: '5px 0',  border: '1px solid white', backgroundColor:"#F1F1F1", borderRadius: '4px', boxSizing: 'border-box' }} />
          <div required style={{fontSize:'10px', width: '100%', margin: '5px 0', borderRadius: '4px', boxSizing: 'border-box',textDecoration:'underline' }}>Forgot your Password</div>
        </div>
        <Link to="/signin" className="skip-link">
        <button type="submit" style={{ width: '100%', fontWeight: 'bold', backgroundColor: '#7B91FF', color: 'white', padding: '15px 20px', margin: '20px 0', border: 'none', borderRadius: '4px' }}><Link to="/goals" className="skip-links">SIGN IN</Link></button></Link>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <hr style={{ width: '45%', marginRight: '10px' }} />
          <span style={{ fontFamily: 'Arial', fontSize: '85%', color: 'rgb(85, 78, 78)' }}>or</span>
          <hr style={{ width: '45%', marginLeft: '10px' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <FaGoogle style={{ fontSize: '30px', color: 'blue', marginRight: '10px' , border:'2px solid grey', padding:'5px', borderRadius:'8px'}} />
          <FaFacebook style={{ fontSize: '30px', color: 'blue', marginLeft: '10px' ,  border:'2px solid grey', padding:'5px', borderRadius:'8px'}} />
        </div>
        <p style={{ textAlign: 'center', fontFamily: 'Arial', fontSize: '85%', color: 'grey', marginTop: '20px', padding:' 0 10px' }}>Don’t have an account? <a href="#" style={{ color: 'blue' }}><Link to="/goals" className="skip-link">Sign up</Link></a></p>
      </form>

      </div>
    </div>
  );
}

export default Signup;
