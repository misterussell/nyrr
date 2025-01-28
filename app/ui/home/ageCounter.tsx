import React from "react";

interface AgeCounterProps {
    age: number
};

const AgeCounter: React.FC<AgeCounterProps> = ({ age }) => {
    const ageString = age.toString().padStart(3, '0');
    
    return (
        <>
            <ul className="flex text-6xl">
                <li className="p-2 border-l-2 border-t-2 border-b-2 border-zinc-400 rounded-l-md">{ageString[0]}</li>
                <li className="p-2 border-t-2 border-b-2 border-zinc-400">{ageString[1]}</li>
                <li className="p-2 border-r-2 border-t-2 border-b-2 border-zinc-400 rounded-r-md">{ageString[2]}</li>
            </ul>
        </>
    );
}

export default AgeCounter;