import Link from 'next/link'
import React from 'react'
import { ClipboardIcon } from '@heroicons/react/outline'

const Page = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col items-center space-y-8">
                <h1 className="text-4xl">Join Room</h1>
                <div>
                    <input type="text" placeholder="Room code" />
                    <ClipboardIcon className="h-7 w-7 cursor-pointer" />
                </div>
                <button>
                    Play
                </button>
            </div>
        </div>
    )
}

export default Page