import React, { Component } from "react";
import AutoClick from "../AutoClick";
import styles from "./Counter.module.css";

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
      <>
        <div>
          <AutoClick
            changeHandler={this.changeHandler}
            resetCount={this.resetCount}
            resetStep={this.props.resetStep}
          />
        </div>
        <div>
          <article>
            <p className={styles.h2}>{count}</p>
          </article>
          <button className={styles.btn} onClick={this.changeHandler}>
            {changeMode}
          </button>
          <button className={styles.btn} onClick={this.clickHandler}>
            change mode
          </button>
        </div>
      </>
    );
  }
}

export default Counter;
