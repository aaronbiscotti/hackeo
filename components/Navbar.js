import React from 'react'
import { CogIcon } from '@heroicons/react/outline'

const Navbar = () => {
    return (
        <div className="h-[150px] w-screen flex justify-between px-12 items-center text-white fixed">
            <div className="flex flex-col justify-center items-start">
                <h1 className="font-semibold text-light text-3xl">WELCOME</h1>
                <h1 className="text-4xl font-medium">hotpotato44</h1>
            </div>
            <CogIcon className="h-10 w-10 duration-300 ease-in-out hover:rotate-45 cursor-pointer" />
        </div>
    )
}

export default Navbar