"use client";

import { useState } from "react";

const ZodiacSelector = () => {

    const [zodiacSelection, setZodiacSelection] = useState<string>('');
    const [zodiacPreview, setZodiacPreview] = useState<string>('Preview here')
    const zodiacDB = {
        "scorpio": "Scorpio details here",
        "ignoble": "Ignoble details here",
        "hydra": "Hydra details here"
    };

    // handle zodiac div click
    const handleZodiacClick = (selection: string) => {
        setZodiacSelection(selection);
        setZodiacPreview(zodiacDB[selection as keyof typeof zodiacDB]);
    };

    return (
        <div>
            <div>
                <div onClick={() => {handleZodiacClick('scorpio')}}>scorpio</div>
                <div onClick={() => {handleZodiacClick('hydra')}}>hydra</div>
                <div onClick={() => {handleZodiacClick('ignoble')}}>ignoble</div>

            </div>
            <div>
                <p>{zodiacPreview}</p>
            </div>
        </div>
    );
};

export default ZodiacSelector;
