import React from 'react'
import styles from './counter.scss'

export const Counter = ({ onIncrease, onDecrease, total }) =>
  <div className={styles.counter}>
    <button onClick={onDecrease}>-</button>
    {total}
    <button onClick={onIncrease}>+</button>
  </div>

Counter.propTypes = {
  onIncrease: React.PropTypes.func,
  onDecrease: React.PropTypes.func,
  total: React.PropTypes.number,
}
Counter.defaultProps = {
  total: 0,
}
