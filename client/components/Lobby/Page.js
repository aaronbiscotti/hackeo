import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import io from "socket.io-client"
const socket = io.connect("http://localhost:3001");


const Page = () => {
    const [id, setId] = useState("");
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col items-center space-y-8">
                <h1 className="text-4xl">Play</h1>
                <input type="text" placeholder="Room code" onChange={(e) => setId(e.target.value)} />
                <Link href={`/room/${id}`}>
                    <button className="btn">
                        Play
                    </button>
                </Link>
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