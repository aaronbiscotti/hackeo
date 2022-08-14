import React, { useContext } from 'react'
import Link from 'next/link'
import { GameContext } from '../../components/Contexts/GameContext';

const End = () => {
    const { tracker } = useContext(GameContext);
    const [score] = tracker;
    return (
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-[#191B34] flex justify-center items-center flex-col space-y-10">
            <h1 className="text-3xl">You finished with a score of {score}!</h1>
            <Link href="/">
                <button className="btn">Play again</button>
            </Link>
        </div>
    )
}

export default End