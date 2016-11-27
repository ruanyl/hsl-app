import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { Counter } from '../components/Counter'
import {
  CounterSelectors as CS,
  increase,
  decrease,
} from '../modules/Counter'

const mapStateToProps = createSelector(
  [
    CS.getTotal,
  ],
  total => ({ total })
)

const mapDispatchToProps = dispatch => ({
  onIncrease: () => dispatch(increase()),
  onDecrease: () => dispatch(decrease()),
})

export const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
