import React from 'react'
import ProductCard from './components/ProductCard'

interface User {
    id: number,
    name: string,
    email: string
}

const UserPage = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {cache: "no-store"});
    const users: User[] = await response.json();
    
  return (
    <>
    <h1>Users</h1>
    <p>{new Date().toLocaleTimeString()}</p>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
        {users.map((user) => (
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
            </tr>
        ))}
        </tbody>
    </table>
    </>
    
  )
}

export default UserPage