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
          <div className="flex justify-center space-x-4 mt-4">
            <Features />
          </div>
          <main>{children}</main>
      </div>
    )
  }