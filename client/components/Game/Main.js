import { useState } from "react";
import { questionData } from "../../pages/api/data";

export default function Main() {
    const [open, setOpen] = useState(false);
    const [num, setNum] = useState(0);
    const numbers = 10;
    const yn = 60;

    const [selectedArr, setSelectedArr] = useState([]);
    const grid = [];

    for (let i = 0; i < numbers; i++) {
        for (let j = 0; j < yn; j++) {
            grid.push({ x: j, y: i });
        }
    }

    function handleSelect(g) {
        if (selectedArr?.length > 0) {
            const isAlreadySelected = selectedArr?.filter(
                (s) => s.x === g.x && s.y === g.y
            );
            if (!isAlreadySelected || isAlreadySelected?.length > 0) {
                return;
            }
        }
        setOpen(true);
        setSelectedArr([...selectedArr, g]);
        setNum(Math.floor(Math.random() * 47));
    }

    const question = questionData[num];
    const multiple_choices = question.Choices.split(",");


    return (
        <>
            {open &&
                (
                    <>
                        <div className={`${open ? 'right-0' : 'translate-x-[-500px]  ease-in-out'} fixed duration-500 w-[500px] bg-[#282D4A] top-0 bottom-0 px-20 flex flex-col justify-center space-y-5`}>
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
                                    <button className="mcq mb-5 w-full" key={index} onClick={() => { setOpen(false) }}>
                                        <div className="rounded-[100%] h-5 w-5 ml-5 border border-[#686F8E]" />
                                        <p className="ml-5 text-sm">{choice}</p>
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="absolute bg-white top-0 bottom-0 left-0 right-[100px] opacity-0 z-[1000]" />
                    </>
                )}
            <div className="flex flex-col items-center">
                <div className="flex flex-wrap max-w-[950px] p-20 m-auto">
                    {grid?.map((g) => (
                        <div
                            key={Math.random() + 29389283}
                            className={`border-black border-solid border text-black flex justify-center items-center w-[26px] h-[26px] cursor-pointer ${selectedArr.filter((i) => i.x === g.x && i.y === g.y).length > 0 ? "bg-[#7A4CEB]" : "bg-white"}`}
                            onClick={() => {
                                handleSelect(g);
                            }}
                        >
                            {/* <p>{genRandom3}</p> */}
                        </div>
                    ))}
                </div>
            </div >
        </>
    );
}
