import React, { useContext } from 'react'
import { LoginContext } from "../Contexts/LoginContext"
const Navbar = () => {
    const { username } = useContext(LoginContext);
    return (
        <div className="h-[150px] w-screen flex justify-between px-12 items-center text-white fixed">
            <div className="flex flex-col justify-center items-start">
                <h1 className="font-semibold text-light text-3xl">WELCOME</h1>
                <h1 className="text-4xl font-medium">{username}</h1>
            </div>
            <div />
        </div>
    )
}

export default Navbar