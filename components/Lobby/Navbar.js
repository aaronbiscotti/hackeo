import React, { useState } from 'react'
import { CogIcon } from '@heroicons/react/outline'

const subjects = [
    "Mathematics",
    "Computer science",
    "Physics",
    "Biology",
    "Randomize",
]

const Navbar = () => {
    const [open, setOpen] = useState(true);
    return (
        <div className="h-[150px] w-screen flex justify-between px-12 items-center text-white fixed">
            <div className="flex flex-col justify-center items-start">
                <h1 className="font-semibold text-light text-3xl">WELCOME</h1>
                <h1 className="text-4xl font-medium">hotpotato44</h1>
            </div>
            <CogIcon className="h-10 w-10 duration-300 ease-in-out hover:rotate-45 cursor-pointer z-[100]"
                onClick={() => setOpen(!open)}
            />
            <div className={`slider fixed duration-300 ${open ? 'right-[-500px]' : 'right-0'} w-[500px] bg-[#494E66] top-0 bottom-0 px-20 py-[150px]`}>
                <h1 className="text-4xl">Settings</h1>
                <div className="flex h-full flex-col justify-around">
                    <div>
                        <h1 className="font-light mb-5">Select a theme</h1>
                        <div className="flex flex-col items-start space-y-5">
                            {subjects.map((subject, index) => (
                                <button className="mcq" key={index}>
                                    <div className="rounded-[100%] h-5 w-5 ml-5 border border-[#686F8E]" />
                                    <p className="ml-5">{subject}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar