import React, { useState } from 'react'
import './index.css'
const UseStateCounter = () => {
  const [value, setValue] = useState(0)

  const reset = () => {
    setValue(0)
  }

  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>regular counter</h2>
        <h1 data-testid='counter-text'>{value}</h1>
        <button
          className='btn'
          onClick={() => setValue(value - 1)}
          data-testid='btn-decrement'
        >
          Decrease
        </button>
        <button className='btn' onClick={reset} data-testid='reset' >
          Reset
        </button>
        <button 
          className='btn'
          onClick={() => setValue(value + 1)}
          data-testid='btn-increment'
        >
          Increase
        </button>
      </section>
    </>
  )
}

export default UseStateCounter
