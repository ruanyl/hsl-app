import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { MapRender } from '../components/Map'
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

export const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapRender)
