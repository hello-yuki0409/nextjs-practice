"use client"

import React, { ChangeEvent, useState } from 'react'

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

    const onSubmit = () => {
        fetch("/users", {
            method: "POST",
            body: JSON.stringify(data),
        })
        .then((response) => response.json()
        .then((res) => console.log({res})
        ))
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