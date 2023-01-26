import React, { Component } from "react";
import { format, add } from "date-fns";

import styles from "./AutoClick.module.css";

class AutoClick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0, 0),
      mess: "",
    };
    this.timeEnd = new Date(0, 0, 0, 0, 0, 30, 0);
    this.intervalId = null;
    this.timelId = null;
  }

  tick = () => {
    const { time } = this.state;
    if (time < this.timeEnd) {
      this.setState((state) => {
        return { time: add(state.time, { seconds: 1 }) };
      });
    } else {
      this.stop();
      this.setState({ mess: `Time is over: ` });
    }
  };
  start = () => {
    const { changeHandler } = this.props;
    if (this.intervalId === null) {
      this.intervalId = setInterval(changeHandler, 1000);
      this.timelId = setInterval(this.tick, 1000);
    }
    this.setState({ mess: "" });
  };
  stop = () => {
    clearInterval(this.intervalId);
    clearInterval(this.timelId);
    this.intervalId = null;
    this.timelId = null;
  };
  reset = () => {
    this.stop();
    this.props.resetCount();
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0, 0) });
    this.props.resetCount();
    this.props.resetStep();
    this.setState({ mess: "" });
  };
  componentWillUnmount() {
    this.stop();
  }
  render() {
    return (
      <div className={styles.autoClick}>
        <h2>AutoClick </h2>
        <h2>
          {this.state.mess}
          {format(this.state.time, "HH:mm:ss")}
        </h2>
        <button className={styles.btn} onClick={this.start}>
          start
        </button>
        <button className={styles.btn} onClick={this.stop}>
          stop
        </button>
        <button className={styles.btn} onClick={this.reset}>
          reset
        </button>
      </div>
    );
  }
}

export default AutoClick;
