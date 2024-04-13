import {React, useState} from 'react';
import '../App.css';
import Header from './header';
import graph from '../images/graph.png';
import { BiError } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import exercise from '../images/exercise.png';
import {Link} from 'react-router-dom';
function Skip() {
  const myEventsList = [
    {
      start: new Date(2024, 3, 13, 9, 0), // May 13, 2024, 2:00 PM
      end: new Date(2024, 3, 13, 10, 0),   // May 13, 2024, 4:00 PM
      title: 'Event 3'
    },
  
    {
      start: new Date(2024, 3, 13, 14, 0), // May 13, 2024, 2:00 PM
      end: new Date(2024, 3, 13, 14, 50),   // May 13, 2024, 4:00 PM
      title: 'Event 2'
    },
    {
      start: new Date(2024, 3, 14, 10, 0), // April 12, 2024, 10:00 AM
      end: new Date(2024, 3, 14, 10, 30),   // April 12, 2024, 12:00 PM
      title: 'Event 1'
    },
    
  
  ];

  const formatTime = (time) => {
    return time.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });
  };
  const [toggle, setToggle] = useState(false);

const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="container">
      <div>
      <Header /></div>
      <Link to="/calendar" className="skip-link">Next</Link>
      <div className="goal-text"> Workout Tracker </div>
      <img src={graph} alt="Logo" />
      <div className="error-text">
        <div style={{ fontSize: '36px', color:'#819DFF47' }}>
          <BiError />
        </div>
        <div>You have burned fewer calories than yesterday. Time to get moving!</div>
      </div>
      <div className="flex-container">
        <h3 className="left-text">Upcoming Workout</h3>
        <h6 className="right-text">See more</h6>
      </div>
      <div className="event-list">
  {myEventsList.map((event, index) => {
    const eventDate = new Date(event.start);
    const today = new Date();
    const isToday = eventDate.toDateString() === today.toDateString();
    const formattedDate = isToday ? "Today" : eventDate.toLocaleDateString();
    return (
      <div className="toggleer">
      <div key={index} className="activity">
        <img src={exercise} alt="Exercise" className="exer-img" />
        <div className="flex-exer">
          <p className="exercise-name">{event.title}</p>
          <p className="exercise-time">{formattedDate} {formatTime(event.start)}</p>
        </div>
        <div className="toggle-container">
          <input type="checkbox" />
          <span className="slider round"></span>
        </div>
      </div>
      </div>
    );
  })}
</div>


  


    

     
    </div>
  );
}

export default Skip;
