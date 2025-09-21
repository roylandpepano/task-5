import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
   return (
      <header className="w-full flex items-center justify-between py-4 px-6 border-b border-black/10 dark:border-white/10 sticky top-0 backdrop-blur bg-background/80 z-50">
         <h1 className="text-lg font-semibold">This is a Header</h1>
         <nav className="flex items-center gap-4 text-sm">
            <Link href="#hero" className="hover:underline">
               This is a Nav Link
            </Link>
            <Link href="#testimonials" className="hover:underline">
               This is a Nav Link
            </Link>
            <Link href="#gallery" className="hover:underline">
               This is a Nav Link
            </Link>
            <ThemeToggle />
         </nav>
      </header>
   );
}
