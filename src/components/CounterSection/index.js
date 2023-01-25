import React, { Component } from "react";
import Counter from "../Counter";

const minStep = 1;
const maxStep = 1000000;

class CounterSection extends Component {
  constructor(props) {
    super(props);
    this.state = { step: minStep };
  }

  stepHandler = ({ target }) => {
    if (target.value < maxStep)
      this.setState({ step: target.value.replace(/[^0-9 .]/g, "") });
  };
  render() {
    const { step } = this.state;
    return (
      <>
        <Counter step={step} />
        <label>step: {step}</label>
        <input
          value={step}
          onChange={this.stepHandler}
          type="text"
          name="step"
        />
      </>
    );
  }
}

export default CounterSection;
