// import React, { Suspense } from 'react'
import ClientComponent from './ClientComponent'
// import ServerComponent from './ServerComponent'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <ClientComponent />
      {/* <Suspense fallback={<p>loading...</p>}>
      <ServerComponent />
      </Suspense> */}
    </div>
  )
}

export default Home