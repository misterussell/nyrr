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
        "queen": {
            title: "The Queen",
            description: "Description here",
            characteristics: [],
            content: "Content here",
            },
        "ignoble": {
            title: "The Ignoble",
            description: "Description here",
            characterists: ["Gambler", "Courageous", "Forgetful"],
            content: "Once cunning and ambitious, the Ignoble lost everything in a single night. Gambling in a small rat ridden hovel they lost their thumb on a game of cards. Then the gods took their gold and dignity. Now they spend eternity trying to regain their lost fortune.",
        },
        "hydra": {
            title: "The Hydra",
            description: "Description here",
            characteristics: [],
            content: "Content here",
        }
    };

    // handle zodiac div click
    const handleZodiacClick = (selection: string) => {
        setZodiacSelection(selection);
    };

    return (
        <div>
            <div className="flex flex-1 flex-col gap-2 p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                {
                    Object.keys(zodiacDB).map((zodiac) => {
                        return (
                            <Card className="aspect-video rounded-xl bg-muted/50"
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
        </div>
    );
};

export default ZodiacSelector;
