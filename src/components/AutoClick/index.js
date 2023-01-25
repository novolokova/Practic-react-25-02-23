import React, { Component } from "react";

class AutoClick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0, 0),
      mess: "",
    };
    this.intervalId = null;
    this.timelId = null;
  }

  tisk = () => {
    const { time } = this.state;
    const newTime = new Date(time);
    newTime.setSeconds(newTime.getSeconds() + 1);
    this.setState({ time: newTime });
  };

  start = () => {
    const { changeHandler } = this.props;
    if (this.intervalId === null) {
      this.intervalId = setInterval(changeHandler, 1000);
      this.timelId = setInterval(this.tisk, 1000);
    }
    this.setState({ mess: "" });
  };

  stop = () => {
    clearInterval(this.intervalId);
    clearInterval(this.timelId);
    this.intervalId = null;
    this.timelId = null;
    const { time } = this.state;
    const message = `Your time: ${time.toLocaleTimeString("en-GB")}`;
    this.setState({ mess: message });
  };
  reset = () => {
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0, 0) });
    this.props.resetCount();
    this.stop();
  };

  componentWillUnmount() {
    this.stop();
  }

  render() {
    return (
      <div>
        <h2>AutoClick {this.state.mess}</h2>
        <button onClick={this.start}>start</button>
        <button onClick={this.stop}>stop</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

export default AutoClick;
