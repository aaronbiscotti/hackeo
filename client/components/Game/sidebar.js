import React from 'react'

const Sidebar = () => {
  return (
    <>
      <div className="flex justify-end h-screen">
        <div className="bg-[#282D4A] w-1/3 box-border p-8">
          <h1 className="text-4xl w-3/4 mb-5">
            Welcome to <span className="font-bold">our game.</span>
          </h1>

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
          <button className='btn-2 mt-3'>Begin!</button>
        </div>
      </div>
    </>
  );
}

export default Sidebar