import React from 'react'
import ClientComponent from './ClientComponent'
import ServerComponent from './ServerComponent'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <ClientComponent />
      <ServerComponent />
    </div>
  )
}

export default Home