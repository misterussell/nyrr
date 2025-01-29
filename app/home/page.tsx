import { getCharacter } from "../api/getCharacter";
import AgeCounter from "../ui/home/ageCounter";
import { Separator } from "@/components/ui/separator";
import HoverButton from "@/components/ui/hover-button";

export default async function Page() {
    const character = await getCharacter();
    const daysSince = (isoDate: string) => {
        const date = new Date(isoDate);
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - date.getTime());
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    };
    const characterAge = daysSince(character.createdAt);

    return (
        <div className="grid auto-rows-min gap-4 m-0.5 md:grid-cols-2 md:m-4">
            {character && (
                <div className="md:row-span-2 rounded-xl bg-muted/50 shadow border">
                        <header className="bg-emerald-600 rounded-t-lg text-muted text-sm font-bold pl-2 py-1">
                            User Information
                        </header>
                        <div className="p-2">
                            <div className="grid grid-cols-2 gap-4 profile-image">
                                <div className="grid justify-items-center">
                                    <h1 className="scroll-m-20 text-2xl font-extrabold">
                                        {character.username.toUpperCase()}
                                    </h1>
                                    <img 
                                        src={character.profilePic}
                                        alt={character.zodiac}
                                        className="rounded-xl"
                                        />
                                </div>
                                <div className="grid justify-items-center">
                                    <div> 
                                        <p>Level</p>
                                        <AgeCounter age={character.level} />
                                    </div>
                                    <div>
                                        <p>Age</p>
                                        <AgeCounter age={ characterAge } />
                                    </div>
                                </div>
                            </div>  
                        </div>
                </div>
            )}
            <div className="md:row-span-1 rounded-xl bg-muted/50">
                <header className="bg-emerald-600 rounded-t-lg text-muted text-sm font-bold pl-2 py-1">
                    Actions
                </header>
                <div className="p-2">
                    <HoverButton text="Send Message" />
                </div>
            </div>
            <div className="md:row-span-1 rounded-xl bg-muted/50">
                <header className="bg-emerald-600 rounded-t-lg text-muted text-sm font-bold pl-2 py-1">
                    Status
                </header>
                <div className="p-2">
                    None
                </div>
            </div>
            <div className="md:col-span-2 rounded-xl bg-muted/50">
                <header className="bg-emerald-600 rounded-t-lg text-muted text-sm font-bold pl-2 py-1">
                    Medals
                </header>
            </div>
            <div className="md:row-span-1 rounded-xl bg-muted/50">
                <header className="bg-emerald-600 rounded-t-lg text-muted text-sm font-bold pl-2 py-1">
                    Basic Information
                </header>
                <div className="p-2">
                    <div className="flex h-5 items-center space-x-4 text-sm">
                        <div>{character.gender}</div>
                        <Separator orientation="vertical" />
                        <div>{character.race}</div>
                    </div>
                </div>
            </div>
        </div >
        );
};