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

const raceSelector = () => {

    const [raceSelection, setRaceSelection] = useState<string>('');
    const raceDB = {
        "human": {
            title: "Human",
            description: "Description here",
            characteristics: [],
            content: "Content here",
        },
        "elf": {
            title: "Elf",
            description: "Description here",
            characterists: [],
            content: "Content here",
        },
        "dwarf": {
            title: "Dwarf",
            description: "Description here",
            characteristics: [],
            content: "Content here",
        },
        "faefolk": {
            title: "Faefolk",
            description: "Description here",
            characteristics: [],
            content: "Content here",
        }
    };

    const handleRaceClick = (selection: string) => {
        setRaceSelection(selection);
    };

    return (
        <div>
            <div className="flex flex-1 flex-col gap-2 p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    {
                        Object.keys(raceDB).map((race) =>
                        {
                            return (
                            <Card className="aspect-video rounded-xl bg-muted/50 h-96"
                                key={race}
                                onClick={() => {
                                    handleRaceClick(race)}}>
                                <CardHeader>
                                    <CardTitle>{raceDB[race as keyof typeof raceDB].title}</CardTitle>
                                </CardHeader>
                                <CardFooter>
                                    <Button className={cn("btn w-full", raceSelection === race ? "btn-primary" : "btn-secondary")}>
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

}

export default raceSelector;