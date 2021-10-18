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
        <h1>{value}</h1>
        <button
          data-testid='decrease'
          className='btn'
          onClick={() => setValue(value - 1)}
        >
          Decrease
        </button>
        <button data-testid='reset' className='btn' onClick={reset}>
          Reset
        </button>
        <button data-testid='increase'
          className='btn'
          onClick={() => setValue(value + 1)}
        >
          Increase
        </button>
      </section>
    </>
  )
}

export default UseStateCounter
