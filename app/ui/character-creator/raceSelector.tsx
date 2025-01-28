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
import useAppStore from "@/stores/appStore";

const raceSelector = () => {

    const genderSelection = useAppStore((state) => state.gender);
    const setGenderSelection = useAppStore((state) => state.setGender);
    const raceSelection = useAppStore((state) => state.race);
    const setRaceSelection = useAppStore((state) => state.setRace);

    const raceDB = {
        "human": {
            title: "Human",
            description: "Practical and Versatile",
            characteristics: [],
            content: "Content here",
        },
        "elf": {
            title: "Elf",
            description: "Wise and Elegant",
            characterists: [],
            content: "Content here",
        },
        "dwarf": {
            title: "Dwarf",
            description: "Hard-headed and Strong",
            characteristics: [],
            content: "Content here",
        },
        "faefolk": {
            title: "Faefolk",
            description: "Mystical and Mischievous",
            characteristics: [],
            content: "Content here",
        },
        "orc": {
            title: "Orc",
            description: "Violent and Loyal",
            characteristics: [],
            content: "Content here",
        },
        "demon": { 
            title: "Demon",
            description: "Sinister and Cunning",
            characteristics: [],
            content: "Content here",
        }
    };

    return (
        <div>
            <div className="flex justify-center space-x-4 mt-4">
                <Button 
                    variant={genderSelection === "male" ? "outline": "default"}
                    onClick={() => setGenderSelection("male")}>
                    Male
                </Button>
                <Button 
                    variant={genderSelection === "female" ? "outline": "default"}
                    onClick={() => setGenderSelection("female")}>
                    Female
                </Button>
                <Button 
                    variant={genderSelection === "nonbinary" ? "outline": "default"}
                    onClick={() => setGenderSelection("nonbinary")}>
                    Non-Binary
                </Button>
                <Button 
                    variant={genderSelection === "eunuch" ? "outline": "default"}
                    onClick={() => setGenderSelection("eunuch")}>
                    Male
                </Button>
            </div>
            <div className="flex flex-1 flex-col gap-2 p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    {
                        Object.keys(raceDB).map((race) =>
                        {
                            return (
                            <Card className="aspect-video rounded-xl bg-muted/50"
                                key={race}>
                                <CardHeader>
                                    <CardTitle>{raceDB[race as keyof typeof raceDB].title}</CardTitle>
                                    <CardDescription>
                                        {raceDB[race as keyof typeof raceDB].description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="grid gap-4">
                                    {raceDB[race as keyof typeof raceDB].content}
                                </CardContent>
                                <CardFooter>
                                    <Button 
                                        variant={raceSelection === race ? "outline": "default"}
                                        onClick={() => setRaceSelection(race)}>
                                        {raceSelection === race ? "Selected" : "Select"}
                                    </Button>
                                </CardFooter>
                            </Card>
                            )

                        })
                }
                </div>
            </div>
        </div>
    )
};

export default raceSelector;