"use client"

import React, { ChangeEvent, useState } from 'react'
import { createUserAction } from "./create-user-action"

const ClientComponent = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const onChangeData = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setData ({...data, [name]: value})
    }

    const onSubmit = async () => {
  const res = await createUserAction(data);
  console.log(res);
}


return (
    <div>
      <input className="border" type="text" name="name" onChange={onChangeData} />
      <input className="border" type="text" name="email" onChange={onChangeData} />
      <input className="border" type="text" name="password" onChange={onChangeData} />
      <button onClick={onSubmit}>Submit送信</button>
    </div>
  )
}

export default ClientComponent