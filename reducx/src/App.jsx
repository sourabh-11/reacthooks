import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement,increment, incrementByAmount } from './redux/counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch   = useDispatch();


  return (
    <>
    <Navbar/>
    <button onClick={()=>dispatch(incrementByAmount(2))}>+</button>
      <div>

        {count}
      </div>
    <button onClick={()=>dispatch(decrement())}>-</button>
    </>
  )
}

export default App
