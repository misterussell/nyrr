import Link from "next/link";

import Features from "../ui/character-creator/features";

export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div>
        {/* Layout UI */}
          {/* Place children where you want to render a page or nested layout */}
          <h1>Character Creator - New Character</h1>
          <div className="grid auto-rows-min gap-2 md:grid-cols-3">
            <Features />
          </div>
          <Link href="/character-creator">Back to character overview</Link>
          <main>{children}</main>
      </div>
    )
  }