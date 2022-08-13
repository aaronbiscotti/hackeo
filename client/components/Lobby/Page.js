import Link from 'next/link'
import React from 'react'

const Page = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col items-center space-y-8">
                <h1 className="text-4xl">Play</h1>
                <input type="text" placeholder="Room code" />
                <button className="btn">
                    Play
                </button>
                <h1 className="text-light font-semibold">OR</h1>
                <Link href="/create-room">
                    <button className="btn">
                        Generate room code
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Page