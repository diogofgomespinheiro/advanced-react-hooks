import * as React from 'react'

const actionTypes = {
  INCREMENT: 'increment',
}

const countReducer = (state, action) => {
  const {type, step} = action

  switch (type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + step,
      }
    default:
      return state
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: actionTypes.INCREMENT, step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
