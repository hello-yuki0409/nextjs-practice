"use client"

import React, { useState } from 'react'

const ClientComponent = () => {
    const [count, setCount] = useState(0);
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  )
}

export default ClientComponent