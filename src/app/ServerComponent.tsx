import React from 'react'
import { createUserActionFormServerComponent } from './create-user-action'

const ServerComponent = async () => {
    return (
        <form action={createUserActionFormServerComponent}>
    <input className="border" type="text" name="name" />
    <input className="border" type="text" name="email" />
    <input className="border" type="text" name="password" />
    <button >Submit送信</button>
        </form>
  )
}

export default ServerComponent