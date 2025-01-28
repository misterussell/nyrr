'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import useAppStore from "@/stores/appStore";

// map of links, to be used as character features
const links = [
    { name: "Race", href: "/character-creator/race"},
    { name: "Zodiac", href: "/character-creator/zodiac"},
    { name: "Background", href: "/character-creator/background"}
];

export default function Features() {
    
    const pathname = usePathname();
    const background = useAppStore((state) => state.background);
    const gender = useAppStore((state) => state.gender)
    const race = useAppStore((state) => state.race);
    const zodiac = useAppStore((state) => state.zodiac);

    return (
        <>
            <div className="grid grid-cols-3 gap-1">
                {links.map((link) => {
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            replace
                            className="rounded-xl bg-muted/50 p-4"
                            >
                            <p>{link.name}</p>
                        </Link>
                    )
                })}
                <div className="rounded-xl bg-muted/50 p-2" id="race gender">{ gender === "" ? "pending..." : `${gender}/${race}` }</div>
                <div className="rounded-xl bg-muted/50 p-2" id="zodiac">{ zodiac === "" ? "pending..." : zodiac }</div>
                <div className="rounded-xl bg-muted/50 p-2" id="background">{ background === "" ? "pending..." : background }</div>
                <div className="rounded-xl bg-muted/50 p-2 col-span-3 flex justify-center" id="submit">Ready!</div>
            </div>
        </>
    )
}