import React from "react";
import PropTypes from "prop-types";
import styles from "./Counter.module.scss";

/**
 * @param {*} props
 * @param {number} props.count
 * @param {number} props.step
 * @param {boolean} props.isAdd
 * @param {function} props.stepHandler
 * @param {function} props.changeHandler
 * @param {function} props.clickHandler
 */
function Counter(props) {
  const { count, step, isAdd, stepHandler, changeHandler, clickHandler } =
    props;
  const changeMode = isAdd ? "Add +" : "Sub -";
  return (
    <>
      <div>
        <article>
          <p className={styles.h2}>{count}</p>
        </article>
        <button className={styles.btn} onClick={changeHandler}>
          {changeMode}
        </button>
        <button className={styles.btn} onClick={clickHandler}>
          change mode
        </button>
        <p>step: {step}</p>
        <input
          className={styles.input}
          value={step}
          onChange={stepHandler}
          type="text"
          name="step"
        />
      </div>
    </>
  );
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  isAdd: PropTypes.bool.isRequired,
  stepHandler: PropTypes.func,
  changeHandler: PropTypes.func,
  clickHandler: PropTypes.func,
};

Counter.defaultProps = {
  count: 0,
  step: 1,
  isAdd: true,
  stepHandler: ()=>{},
  changeHandler: ()=>{},
  clickHandler: ()=>{},
}



export default Counter;
