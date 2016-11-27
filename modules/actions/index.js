import keyMirror from 'key-mirror-nested'

const ActionType = keyMirror({
  COUNTER: {
    INCREMENTAL: null,
    DECREMENTAL: null,
  },
})

export default ActionType
