import { getCharacter } from "../api/getCharacter";
import AgeCounter from "../ui/home/ageCounter";
import { Separator } from "@/components/ui/separator";
import HoverButton from "@/components/ui/hover-button";
import Image from "next/image";

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
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid justify-items-center ml-4 mb-4">
                                    <div className="col-span-1 text-2xl font-extrabold">
                                        {character.username.toUpperCase()}
                                    </div>
                                    <Image
                                        src={character.profilePic}
                                        alt={character.zodiac}
                                        width={500}
                                        height={700}
                                        />
                                </div>
                                <div className="grid justify-items-center mt-6">
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
            <div className="md:row-span-1 rounded-xl bg-muted/50 shadow border">
                <header className="bg-emerald-600 rounded-t-lg text-muted text-sm font-bold pl-2 py-1">
                    Actions
                </header>
                <div className="p-2">
                <button className="px-8 py-0.5 border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
                    Send Message
                </button>
                </div>
            </div>
            <div className="md:row-span-1 rounded-xl bg-muted/50 shadow border">
                <header className="bg-emerald-600 rounded-t-lg text-muted text-sm font-bold pl-2 py-1">
                    Status
                </header>
                <div className="p-2 brutal">
                    {character.status}
                </div>
            </div>
            <div className="md:col-span-2 rounded-xl bg-muted/50 shadow border">
                <header className="bg-emerald-600 rounded-t-lg text-muted text-sm font-bold pl-2 py-1">
                    Medals
                </header>
            </div>
            <div className="md:row-span-1 rounded-xl bg-muted/50 shadow border">
                <header className="bg-emerald-600 rounded-t-lg text-muted text-sm font-bold pl-2 py-1">
                    Basic Information
                </header>
                <div className="information-table">
                    <div className="flex h-5 items-center space-x-4 text-sm p-5">
                        {/* logos to go here*/}
                        <div>{character.gender}</div> 
                        <Separator orientation="vertical" />
                        <div>{character.race}</div>
                    </div>
                    <ul className="flex flex-col info-table">
                        <li className="grid grid-cols-4 border-t border-b">
                            <div className="border-r pl-3">Name</div>
                            <div className="col-span-3 pl-3">
                                {character.username} [{character.xid}]
                            </div>
                        </li>
                        <li className="grid grid-cols-4 border-b">
                            <div className="border-r pl-3">Role</div>
                            <div className="col-span-3 pl-3">{character.role}</div>
                        </li>
                        <li className="grid grid-cols-4 border-b">
                            <div className="border-r pl-3">Job</div>
                            <div className="col-span-3 pl-3">{character.job}</div>
                        </li>
                        <li className="grid grid-cols-4 border-b">
                            <div className="border-r pl-3">Life</div>
                            <div className="col-span-3 pl-3">{character.life[0]} / {character.life[1]}</div>
                        </li>
                        <li className="grid grid-cols-4">
                            <div className="border-r pl-3">Last Action</div>
                            <div className="col-span-3 pl-3">{character.lastAction}</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
        );
};