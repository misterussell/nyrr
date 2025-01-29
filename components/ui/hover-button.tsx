import React from "react";

interface HoverButtonProps {
    text: string    
};

const HoverButton: React.FC<HoverButtonProps> = ({ text }) => {
    return (
        <>
            <button className="relative inline-block px-4 py-2 font-medium group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-zinc-400 group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-xl"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-zinc-400 group-hover:bg-zinc-400 rounded-xl"></span>
                <span className="relative text-black group-hover:text-white">
                  { text }
                </span>
            </button>
        </>
    )

};

export default HoverButton;
