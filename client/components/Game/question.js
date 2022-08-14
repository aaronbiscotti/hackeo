import React from "react";

const Question = () => {
  return (
    <div className="fixed duration-300 right-0 w-[500px] bg-[#282D4A] top-0 bottom-0 px-20 flex flex-col justify-center space-y-5">
      <div className="flex">
        <div className="px-4 flex justify-center mr-6 bg-[#0AC6D0] rounded-3xl">
          <p>MATHEMATICS</p>
        </div>
        <div className="px-4 flex justify-center bg-[#F65A50] rounded-3xl">
          <p>HARD</p>
        </div>
      </div>
      <h1 className="text-4xl">
        Which type of elephant honks like a dolphin?
      </h1>
      <div className="flex flex-col">
        <button className="mcq mb-5 w-full">
          <div className="rounded-[100%] h-5 w-5 ml-5 border border-[#686F8E]" />
          <p className="ml-5">Never</p>
        </button>
        <button className="mcq mb-5 w-full ">
          <div className="rounded-[100%] h-5 w-5 ml-5 border border-[#686F8E]" />
          <p className="ml-5">Sometimes</p>
        </button>
        <button className="mcq mb-5 w-full ">
          <div className="rounded-[100%] h-5 w-5 ml-5 border border-[#686F8E]" />
          <p className="ml-5">Always</p>
        </button>
        <button className="mcq mb-5 w-full ">
          <div className="rounded-[100%] h-5 w-5 ml-5 border border-[#686F8E]" />
          <p className="ml-5">Always</p>
        </button> 
      </div>
    </div>
  );
};

export default Question;


// <div className="flex justify-end h-screen">
//   <div className="bg-[#282D4A] w-1/3 box-border p-8">
//     <h1 className="text-4xl w-3/4 mb-5">
//       Which type of elephant honks like a dolphin
//     </h1>
//     <p className="mb-5">
//       The number in each box denotes the amount of points you score- or how many
//       blocks you will cover by answering the question.{" "}
//     </p>
//     <p>
//       The larger the number in a box, the more blocks you will cover, but the
//       harder the questions will be!
//     </p>
//     <button className="btn-2 mt-3">Begin!</button>
//   </div>
// </div>;