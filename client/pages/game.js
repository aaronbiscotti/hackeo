import React from 'react'
import Sidebar from "../components/Game/sidebar";
import TheTimer from "../components/Game/timer";

const game = () => {
  return (
    <>
      <div className="flex justify-start ">
        <div className="m-4 ">
          <h1 className="text-[#686F8E] font-bold w-56 text-2xl">
            Time Remaining
          </h1>
          <TheTimer />
        </div>
        <Sidebar />
      </div>
    </>
  );
}

export default game