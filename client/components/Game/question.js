import React, { useState } from "react";
import { questionData } from "../../pages/api/data";
const Question = (props) => {
  const [close, setClose] = useState(true);
  const question = questionData[props.index];
  const multiple_choices = question.Choices.split(",");
  return (
    <div className={`${close ? 'right-0' : 'right-[-500px]'} ${props.prop} fixed duration-300 right-0 w-[500px] bg-[#282D4A] top-0 bottom-0 px-20 flex flex-col justify-center space-y-5`}>
      <div className="flex">
        <div className="px-4 flex justify-center items-center mr-6 bg-[#0AC6D0] rounded-3xl">
          <p className="text-sm">{question.Category}</p>
        </div>
        <div className="px-4 flex justify-center items-center bg-[#F65A50] rounded-3xl">
          <p className="text-sm">{question.Difficulty}</p>
        </div>
      </div>
      <h1 className="text-2xl">
        {question.Title}
      </h1>
      <div className="flex flex-col">
        {multiple_choices.map((choice, index) => (
          <button className="mcq mb-5 w-full" key={index} onClick={() => { setClose(false) }}>
            <div className="rounded-[100%] h-5 w-5 ml-5 border border-[#686F8E]" />
            <p className="ml-5 text-sm">{choice}</p>
          </button>
        ))}
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