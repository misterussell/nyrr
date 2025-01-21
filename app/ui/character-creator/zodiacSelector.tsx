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
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { title } from "process";
import Image from "next/image";

const ZodiacSelector = () => {

    const [zodiacSelection, setZodiacSelection] = useState<string>('');
    const zodiacDB = {
        "queen": {
            title: "The Queen",
            description: "The Final Word",
            characteristics: ["Royalty", "Just", "Powerful"],
            content: "An ancient bride of the gods, the Queen is said to have been the first to speak. She is the final word on all matters of life and death. She is the keeper of the balance between the living and the dead.",
            img: "/the_queen.png",
            },
        "ignoble": {
            title: "The Ignoble",
            description: "From Nothing",
            characterists: ["Gambler", "Courageous", "Forgetful"],
            content: "Once cunning and ambitious, the Ignoble lost everything in a single night. Gambling in a small rat ridden hovel they lost their thumb on a game of cards. Then the gods took their gold and dignity. Now they spend eternity trying to regain their lost fortune.",
            img: "/ignoble.png",
        },
        "hydra": {
            title: "The Hydra",
            description: "The Many-Headed",
            characteristics: ["Beast", "Guardian", "Eternal"],
            content: "The Hydra is a creature of many heads, each with its own mind and will. It is said that the Hydra is the guardian of the underworld, and that it will devour any who dare to enter. It wears the armour of all that it has slain.",
            img: "/hydra.png",
        },
        "firesnake": {
            title: "The Firesnake",
            description: "Bringer of War",
            characteristics: ["Creature", "Weapon", "Pest"],
            content: "Lost pet of the god of war, the Firesnake is a creature of chaos and destruction. It is said that the Firesnake will bring about the end of the world. It floats through the cosmos leaving destruction behind.",
            img: "/firesnake.jpg",
        },
        "mother_time": {
            title: "The Mother of Time",
            description: "Weaver of the Tapestry",
            characteristics: [],
            content: "The Mother of Time weaves the tapestry of fate. She watches her clockwork children with a loving eye, guiding them through the trials of life. She is the keeper of the past, the present, and the future.",
            img: "/mother_time.jpeg",
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
                                    <img src={zodiacDB[zodiac as keyof typeof zodiacDB].img} alt={zodiacDB[zodiac as keyof typeof zodiacDB].title} />
                                    {zodiacDB[zodiac as keyof typeof zodiacDB].content}
                                </CardContent>
                                <CardFooter>
                                    <Button className={cn("btn w-full", zodiacSelection === zodiac ? "btn-primary" : "btn-secondary")}>
                                        {zodiacSelection === zodiac ? 'Selected' : 'Select'}
                                    </Button>
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
