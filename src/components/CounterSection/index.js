import React, { Component } from "react";
import Counter from "../Counter";
import styles from "./CounterSection.module.css"
const minStep = 1;
const maxStep = 1000000;

class CounterSection extends Component {
  constructor(props) {
    super(props);
    this.state = { step: minStep };
  }
  resetStep = () => {
    this.setState({ step: 1 });
  };
  stepHandler = ({ target }) => {
    if (target.value < maxStep)
      this.setState({ step: target.value.replace(/[^0-9 .]/g, "") });
  };

  render() {
    const { step } = this.state;
    return (
      <div className={styles.container}>
        <Counter step={step} resetStep={this.resetStep}/>
        <p>step: {step}</p>
        <input
          value={step}
          onChange={this.stepHandler}
          type="text"
          name="step"
        />
      </div>
    );
  }
}

export default CounterSection;
