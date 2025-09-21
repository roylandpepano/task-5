"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui-button";

export function ThemeToggle() {
   const [mounted, setMounted] = useState(false);
   const [theme, setTheme] = useState<"light" | "dark">("light");

   useEffect(() => {
      const stored =
         typeof window !== "undefined" ? localStorage.getItem("theme") : null;
      if (stored === "light" || stored === "dark") {
         setTheme(stored);
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
         setTheme("dark");
      }
      setMounted(true);
   }, []);
   useEffect(() => {
      const root = document.documentElement;
      if (!mounted) return;

      root.classList.remove("light", "dark");
      root.classList.add(theme === "dark" ? "dark" : "light");
      localStorage.setItem("theme", theme);
   }, [theme]);

   if (!mounted) return null;

   return (
      <Button
         aria-label="Toggle theme"
         variant="outline"
         className="hover:cursor-pointer"
         onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      >
         {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      </Button>
   );
}
