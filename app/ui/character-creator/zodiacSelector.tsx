"use client";

import { useState } from "react";
import { 
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { title } from "process";

const ZodiacSelector = () => {

    const [zodiacSelection, setZodiacSelection] = useState<string>('');
    const zodiacDB = {
        "scorpio": {
            title: "Scorpio",
            description: "Description here",
            characteristics: "Characteristics here",
            content: "Content here",
            },
        "ignoble": {
            title: "Ignoble",
            description: "Description here",
            characterists: "Characteristics here",
            content: "Content here",
        },
        "hydra": {
            title: "Hydra",
            description: "Description here",
            characteristics: "Characteristics here",
            content: "Content here",
        }
    };

    // handle zodiac div click
    const handleZodiacClick = (selection: string) => {
        setZodiacSelection(selection);
    };

    return (
        <div>
            <div>
                {
                    Object.keys(zodiacDB).map((zodiac) => {
                        return (
                            <Card className="w-[380px]"
                                key={zodiac}
                                 onClick={() => {handleZodiacClick(zodiac)}}>
                                <CardHeader>
                                    <CardTitle>{zodiacDB[zodiac as keyof typeof zodiacDB].title}</CardTitle>
                                    <CardDescription>{zodiacDB[zodiac as keyof typeof zodiacDB].description}</CardDescription>  
                                </CardHeader>
                                <CardContent className="grid gap-4">
                                    {zodiacDB[zodiac as keyof typeof zodiacDB].content}
                                </CardContent>
                                <CardFooter>
                                    <button className={cn("btn w-full", zodiacSelection === zodiac ? "btn-primary" : "btn-secondary")}>
                                        {zodiacSelection === zodiac ? 'Selected' : 'Select'}
                                    </button>
                                </CardFooter>
                            </Card>
                        );
                    })
                }

            </div>
        </div>
    );
};

export default ZodiacSelector;
