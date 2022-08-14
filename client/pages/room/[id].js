import React from 'react'
import TheTimer from '../../components/Game/Timer';
import Question from '../../components/Game/Question';
import Main from '../../components/Game/Main';

const Game = () => {
    return (
        <>
            <div className="flex fixed left-10 top-10">
                <div className="">
                    <h1 className="text-[#686F8E] font-bold w-56 text-2xl">
                        TIME REMAINING
                    </h1>
                    <TheTimer />


        </div>
                {/* <Sidebar /> */}
                <Main />
            </div>
        </>
    );
}

export default Game