import React, { Component } from "react";
import { format, add } from "date-fns";
import styles from "./AutoClick.module.css";

class AutoClick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0, 0),
      mess: "",
      intervalStep: 1000,
    };
    this.intervalConst = 1000;
    this.timeEnd = new Date(0, 0, 0, 0, 0, 30, 0);
    this.intervalId = null;
    this.timeId = null;
    this.options = [
      { label: "1", value: 1 },
      { label: "0.25", value: 1.75 },
      { label: "0.5", value: 1.5 },
      { label: "0.75", value: 1.25 },
      { label: "1.5", value: 0.66 },
      { label: "2", value: 0.5 },
      { label: "2.5", value: 0.4 },
    ];
  }
  
  tick = () => {
      if (this.state.time < this.timeEnd) {
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
      this.intervalId = setInterval(changeHandler, this.state.intervalStep);
      this.timeId = setInterval(this.tick, 1000);
    }
   
  };
  stop = () => {
    clearInterval(this.intervalId);
    clearInterval(this.timeId);
    this.intervalId = null;
    this.timeId = null;
  };

  reset = () => {
    this.stop();
    this.props.resetCount();
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0, 0) });
    this.props.resetCount();
    this.props.resetStep();
    this.setState({ mess: "" });
  };

  handleChange = ({ target }) => {
    this.setState({ value: target.value });
    this.setState({ intervalStep: this.intervalConst * target.value });
  };

  componentWillUnmount() {
    this.stop();
  }
  render() {
    const{time, mess, options:value} = this.state;
    return (
      <div className={styles.autoClick}>
        <h2>AutoClick </h2>
        <h2>
          {mess}
          {format(time, "HH:mm:ss")}
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
        <div>
          <label> Speed </label>
            <select value={value} onChange={this.handleChange}>
              {this.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
        </div>
      </div>
    );
  }
}

export default AutoClick;
