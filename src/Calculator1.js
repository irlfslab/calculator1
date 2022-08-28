import { useReducer } from 'react'

const initState = {
  num1: 0,
  num2: 0,
  result: '0'
}

function reducer (state, action) {
  if (action.type === 'NUM_ONE') return { ...state, num1: action.number }
  if (action.type === 'NUM_TWO') return { ...state, num2: action.number }
  if (action.type === 'ADD') return { ...state, result: state.num1 + state.num2 }
  if (action.type === 'SUBTRACT') return { ...state, result: state.num1 - state.num2 }
  if (action.type === 'MULTIPLY') return { ...state, result: state.num1 * state.num2 }
  if (action.type === 'DIVIDE') return { ...state, result: state.num1 / state.num2 }
  if (action.type === 'CLEAR') return initState
}

export default function Calculator1 () {
  const [state, dispatch] = useReducer(reducer, initState)

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <div>
      <div>
        <h2>Number 1</h2>
        {numbers.map(number => (
          <button
            key={number}
            onClick={() => dispatch({ type: 'NUM_ONE', number })}
          >
            {number}
          </button>))}
      </div>
      <div>
        <h2>Number 2</h2>
        {numbers.map(number => (
          <button
            key={number}
            onClick={() => dispatch({ type: 'NUM_TWO', number })}
          >
            {number}
          </button>))}
      </div>
      <div>
        <h2>Action</h2>
        <button onClick={() => dispatch({ type: 'ADD' })}>+</button>
        <button onClick={() => dispatch({ type: 'SUBTRACT' })}>-</button>
        <button onClick={() => dispatch({ type: 'MULTIPLY' })}>x</button>
        <button onClick={() => dispatch({ type: 'DIVIDE' })}>/</button>
        <button onClick={() => dispatch({ type: 'CLEAR' })}>C</button>
      </div>
      <div>
        <h2>Result: {state.result}</h2>
      </div>
    </div>
  )
}