import React, { useState, useEffect } from 'react';
import moment from 'moment';
import '../App.css';
import { FaWifi } from "react-icons/fa";
import { CiBatteryFull } from "react-icons/ci";
import { GiNetworkBars } from "react-icons/gi";

function Clock() {
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment());
    }, 1000); 

    return () => {
      clearInterval(intervalId);
    };
  }, []); 

  return (
    <div className="clock-container">
      <div className="clock">
        <div className="header-clock">{currentTime.format('HH:mm')}</div>
      </div>
      <div className="icons-container">
  <div>
    <FaWifi />
  </div>
  <div>
    <CiBatteryFull />
  </div>
  <div>
    <GiNetworkBars />
  </div>
</div>

    </div>
  );
}

export default Clock;
