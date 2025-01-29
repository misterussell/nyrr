import React from "react";

interface AgeCounterProps {
    age: number
};

const AgeCounter: React.FC<AgeCounterProps> = ({ age }) => {
    const ageString = age.toString().padStart(3, '0');
    
    return (
        <>
            <ul className="flex border-2 border-black dark:border-white uppercase text-black text-4xl md:text-8xl transition duration-200 shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]">
                <li className="p-2">{ageString[0]}</li>
                <li className="p-2">{ageString[1]}</li>
                <li className="p-2">{ageString[2]}</li>
            </ul>
        </>
    );
}


export default AgeCounter;