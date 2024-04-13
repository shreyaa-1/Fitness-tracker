import logo from './logo.svg';
import Home from './components/skip'; // Ensure this import statement is present
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SkipTwo from  './components/skip-2';
// import { Scheduler } from "@aldabil/react-scheduler";
// import { EVENTS } from "./components/calendar";
import Calendar from  './components/moment';
// import {Advcal} from "./components/advcal";
import  Goals from  './components/goals';
import  Tracker from  './components/tracker';
import Signin from './components/signin';
import Signup from './components/signup';

function App() {
  return (
    <div className="App">
      <Router> {/* Wrap App with Router */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skip2" element={<SkipTwo />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;