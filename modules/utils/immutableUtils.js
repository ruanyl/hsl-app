const _getField = (state, field) => state.get(field)
const _setField = (state, field, value) => state.set(field, value)
const _incField = (state, field) => state.set(field, state.get(field) + 1)
const _decField = (state, field) => state.set(field, state.get(field) - 1)

export const setField = field => value => state => _setField(state, field, value)
export const getField = field => state => _getField(state, field)
export const incField = field => state => _incField(state, field)
export const decField = field => state => _decField(state, field)

export const getFieldFromState = stateDefination =>
  field => state => getField(field)(getField(stateDefination.id)(state))

