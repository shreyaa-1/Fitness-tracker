import React, { Component } from "react";
import "../App.css";
import Header from './header';
import { Link } from 'react-router-dom';

export const CheckBox = (props) => {
  return (
    <div className="checkbox-container">
      <label>
        {props.value}
        <input
          key={props.id}
          onChange={props.handleCheckChieldElement}
          type="checkbox"
          checked={props.isChecked}
          value={props.value}
        />
      </label>
    </div>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruites: [
        { id: 1, value: "Weight Loss", isChecked: false },
        { id: 2, value: "Muscle Gain", isChecked: false },
        { id: 3, value: "Flexibility and Mobility", isChecked: false },
        { id: 4, value: "General Fitness", isChecked: false },
        { id: 5, value: "Event-specific training", isChecked: false },
        { id: 6, value: "Mindfulness and Mental Health", isChecked: false },
      ],
    };
  }

  handleAllChecked = (event) => {
    let fruites = this.state.fruites;
    fruites.forEach((fruite) => (fruite.isChecked = event.target.checked));
    this.setState({ fruites: fruites });
    console.log(this.state.fruites, "fruits");
  };

  handleCheckChieldElement = (event) => {
    let fruites = this.state.fruites;
    fruites.forEach((fruite) => {
      if (fruite.value === event.target.value)
        fruite.isChecked = event.target.checked;
    });
    this.setState({ fruites: fruites });
    console.log(this.state.fruites, "fruits");
  };

  render() {
    return (
      <div className="container">
        <Header />
        <div className="goal-text"> What are your goals? </div>
        <div className="checkboxes-container">
          {this.state.fruites.map((fruite, index) => {
            return (
              <CheckBox
                key={index}
                handleCheckChieldElement={this.handleCheckChieldElement}
                {...fruite}
              />
            );
          })}
        </div>
        <button className="goal-button">
          <Link to="/tracker" className="skip-links">Confirm</Link>
        </button>
      </div>
    );
  }
}

export default App;
