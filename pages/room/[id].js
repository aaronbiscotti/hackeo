import React, { useContext } from 'react'
import TheTimer from '../../components/Game/Timer';
import Main from '../../components/Game/Main';
import Sidebar from "../../components/Game/Sidebar"
import { GameContext } from '../../components/Contexts/GameContext';

const Game = () => {
    const { timer } = useContext(GameContext);
    const { tracker } = useContext(GameContext);
    const [start] = timer;
    const [score] = tracker;
    return (
        <>
            <div className="flex fixed left-10 top-10">
                <div className="">
                    <h1 className="text-[#686F8E] font-bold w-56 text-2xl">
                        TIME REMAINING
                    </h1>
                    {start ? <TheTimer /> : <h1 className="text-3xl font-medium">5:00</h1>}
                </div>
                <div className="">
                    <h1 className="text-[#686F8E] font-bold w-56 text-2xl">
                        YOUR SCORE
                    </h1>
                    <h1 className="text-3xl font-medium">{score}</h1>
                </div>
                <Sidebar />
                <Main />
            </div>
        </>
    );
}

export default Game