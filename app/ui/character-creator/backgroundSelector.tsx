"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useAppStore from "@/stores/useStore";

const BackgroundSelector = () => {

    const backgroundSelection = useAppStore((state) => state.background);
    const setBackgroundSelection = useAppStore((state) => state.setBackground);

    const backgroundDB = {
      "noble": {
        title: "Noble",
        description: "",
        characterists: [],
        content: "",
      },
      "merchant": {
        title: "Merchant",
        description: "",
        characteristics: [],
        content: "",
      },
      "peasant": {
        title: "Peasant",
        description: "",
        characteristics: [],
        content: "",
      },
      "soldier": {
        title: "Soldier",
        description: "",
        characteristics: [],
        content: "",
      },
      "criminal": {
        title: "Criminal",
        description: "",
        characteristics: [],
        content: "",
      },
      "monk": {
        title: "Monk",
        description: "",
        characteristics: [],
        content: "",
      }
    }

    return (
      <div>
        <div className="flex flex-1 flex-col gap-2 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            {
              Object.keys(backgroundDB).map((background) => {
                return (
                  <Card className="aspect-video rounded-xl bg-muted/50"
                    key={background}>
                    <CardHeader>
                      <CardTitle>{backgroundDB[background as keyof typeof backgroundDB].title}</CardTitle>
                      <CardDescription>
                        {backgroundDB[background as keyof typeof backgroundDB].description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                      {backgroundDB[background as keyof typeof backgroundDB].content}
                    </CardContent>
                    <CardFooter>
                      <Button 
                        variant={backgroundSelection === background ? "outline": "default"}
                        onClick={() => setBackgroundSelection(background)}>
                        { backgroundSelection === background ? "Selected" : "Select" }
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

export default BackgroundSelector;
