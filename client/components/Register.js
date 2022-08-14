import React, { useState } from 'react'
import Navbar from './Lobby/Navbar';

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="flex justify-center items-center h-screen">
            <Navbar />
            <div className="flex flex-col items-center space-y-8">
                <h1 className="text-4xl">Register</h1>
                <input type="text" placeholder="Username" onChange={(event) => {
                    setUsername(event.target.value);
                }} />
                <input type="password" placeholder="Password" onChange={(event) => {
                    setPassword(event.target.value);
                }} />
                <button className='btn'>
                    Register
                </button>
            </div>
        </div>
    )
}

export default Register