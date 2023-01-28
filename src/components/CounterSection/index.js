import React, { Component } from "react";
import { MIN_STEP, MAX_STEP } from "../../constants";
import AutoClick from "../AutoClick";
import Counter from "../Counter";
import styles from "./CounterSection.module.css";

class CounterSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      step: MIN_STEP,
      isAdd: true,
    };
  }
  resetStep = () => {
    this.setState({ step: 1 });
  };

  resetCount = () => {
    this.setState({ count: 0 });
  };

  stepHandler = ({ target }) => {
    if (target.value < MAX_STEP)
      this.setState({ step: target.value.replace(/[^0-9.]/g, "") });
  };

  changeHandler = () => {
    const { step, count, isAdd } = this.state;
    if (isAdd) {
      this.setState({ count: count + Number(step) });
    } else {
      this.setState({ count: count - Number(step) });
    }
  };

  clickHandler = () => {
    this.setState({ isAdd: !this.state.isAdd });
  };

  render() {
    const { count, step, isAdd } = this.state;
    return (
      <div className={styles.container}>
        <AutoClick
          resetStep={this.resetStep}
          resetCount={this.resetCount}
          changeHandler={this.changeHandler}
        />
        <Counter
          count={count}
          step={step}
          isAdd={isAdd}
          stepHandler={this.stepHandler}
          changeHandler={this.changeHandler}
          clickHandler={this.clickHandler}
        />
      </div>
    );
  }
}

export default CounterSection;
