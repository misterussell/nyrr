'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

// map of links, to be used as character features
const links = [
    { name: "Race", href: "/character-creator/race"},
    { name: "Zodiac", href: "/character-creator/zodiac"},
    { name: "Background", href: "/character-creator/background"}
];

export default function Features() {
    const pathname = usePathname();
    return (
        <>
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        replace
                        className="rounded-xl bg-muted/50"
                        >
                        <p>{link.name}</p>
                    </Link>
                )
            })}
        </>
    )
}