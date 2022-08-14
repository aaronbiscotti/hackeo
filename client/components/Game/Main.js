import { useState } from "react";
import Question from "./Question";

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


    return (
        <>
            {open && <Question index={num} prop={'right-0'} />}
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
