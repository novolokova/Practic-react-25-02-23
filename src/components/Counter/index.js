import React, { Component } from "react";
import AutoClick from "../AutoClick";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isAdd: true,
    };
  }
  resetCount = () => {
    this.setState({ count: 0 });
  };
  changeHandler = () => {
    if (this.state.isAdd) {
      this.setState({ count: this.state.count + Number(this.props.step) });
    } else {
      this.setState({ count: this.state.count - Number(this.props.step) });
    }
  };
  clickHandler = () => {
    this.setState({ isAdd: !this.state.isAdd });
  };

  render() {
    const { count, isAdd } = this.state;
    const changeMode = isAdd ? "Add +" : "Sub -";

    return (
      <article>
        <h2>{count}</h2>
        <div>
          <button onClick={this.changeHandler}>{changeMode}</button>
          <button onClick={this.clickHandler}>change mode</button>
        </div>
        <AutoClick
          changeHandler={this.changeHandler}
          resetCount={this.resetCount}
        />
      </article>
    );
  }
}

export default Counter;
