import React, { useContext, useState } from 'react'
import { GameContext } from '../../components/Contexts/GameContext';
const Sidebar = () => {
  const [close, setClose] = useState(false);
  const { timer } = useContext(GameContext);
  const [start, setStart] = timer;

  const handleClick = (e) => {
    e.preventDefault();
    setClose(true);
    setStart(true);
  }
  return (
    <>
      <div className={`fixed duration-300 ${close === false ? 'right-[0]' : 'right-[-500px]'} w-[500px] bg-[#282D4A] top-0 bottom-0 px-20 py-[150px]`}>
        <h1 className="text-4xl">Welcome to Knowledge War</h1>
        <div className="flex h-full flex-col justify-around">
          <div>
            <h1 className="font-light mb-5 mt-8">Select a theme</h1>
            <p className="mb-5">
              The objective of this game is to answer as many questions as you can
              by choosing any empty box on the grid and dominating your opponent
              with knowledge and colors!
            </p>
            <p className='mb-5'>
              The number in each box denotes the amount of points you score- or
              how many blocks you will cover by answering the question.{" "}
            </p>
            <p>
              The larger the number in a box, the more blocks you will cover, but
              the harder the questions will be!
            </p>
            <button className='btn-2 mt-3' onClick={handleClick}>Begin!</button>
          </div>
        </div>
      </div>
      {!close && <div className="absolute bg-white top-0 bottom-0 left-0 right-[25%] opacity-0 z-[2000]" />}
    </>
  );
}

export default Sidebar