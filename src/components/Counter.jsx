import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreamnet, increament } from '../redux/features/counter/counterSlice';

const Counter = () => {
  const {count} = useSelector((state) => state.counter);
  console.log(count)
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increament())}>Increaement</button>
      <div>
        <h1>{count}</h1>
      </div>
      <button onClick={() => dispatch(decreamnet())}>Decreaement</button>
    </div>
  )
}

export default Counter