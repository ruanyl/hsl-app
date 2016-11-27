import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { SearchField } from '../components/SearchField'
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

export const SearchFieldContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchField)
