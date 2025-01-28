import { getCharacter } from "../api/getCharacter";
import AgeCounter from "../ui/home/ageCounter";

import { 
    Card, 
    CardContent,
    CardDescription,
    CardFooter, 
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default async function Page() {
    const character = await getCharacter();
    
    return (
        <div className="grid auto-rows-min gap-4 md:grid-cols-2 p-4">
            {character && (
                <Card className="aspect-video rounded-xl bg-muted/50">
                    <CardHeader>
                        <CardTitle>
                            <h1 className="scroll-m-20 text-2xl font-extrabold">
                                {character.username}
                            </h1>
                        </CardTitle>
                        <CardDescription>
                            <div className="flex h-5 items-center space-x-4 text-sm">
                                <div>{character.gender}</div>
                                <Separator orientation="vertical" />
                                <div>{character.race}</div>
                            </div>
                        </CardDescription>
                        <CardContent className="columns-2">
                        <div className="items-center">
                            <img 
                                src={character.profilePic}
                                alt={character.zodiac}
                                className="rounded-md"
                                />
                        </div>
                        <AgeCounter age={character.level} />
                        </CardContent>
                    </CardHeader>
                </Card> 
            )}
        </div>
        );
};