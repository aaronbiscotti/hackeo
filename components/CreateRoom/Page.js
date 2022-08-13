import Link from 'next/link'
import React, { useState } from 'react'
import { ClipboardIcon } from '@heroicons/react/outline'

const Alert = () => {
    return (
        <div className="w-full text-light text-sm">Copied to clipboard</div>
    )
}

const Page = () => {
    const [showAlert, setShowAlert] = useState(false);

    function makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }

    const id = makeid(9);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(id);
        setShowAlert(true);
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col items-center space-y-8">
                <h1 className="text-4xl">Create Room</h1>
                <div className="relative w-full">
                    <input type="text" value={id} disabled />
                    <ClipboardIcon
                        onClick={copyToClipboard}
                        className="h-7 w-7 cursor-pointer absolute top-2 right-2 text-light" />
                    {showAlert && <Alert />}
                </div>
                <button className="btn">
                    Play
                </button>
                <h1 className="text-light font-semibold">OR</h1>
                <Link href="/">
                    <button className="btn">
                        Return to lobby
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Page