import React from 'react'
import prisma from '../../lib/prisma';

const getUsers = async () => {
    return await prisma.user.findMany();
}

const ServerComponent = async () => {
  const users = await getUsers()
    return (
        <div>
            {users.map((user)=>(
                <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
  )
}

export default ServerComponent