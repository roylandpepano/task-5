import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const barlow = Barlow({
   variable: "--font-barlow",
   subsets: ["latin"],
   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
   display: "swap",
});

export const metadata: Metadata = {
   title: "Project 1",
   description: "Operations Engineer Project 1 Website",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" suppressHydrationWarning>
         <body
            className={`${barlow.className} ${barlow.variable} antialiased min-h-screen flex flex-col bg-background text-foreground`}
         >
            <script
               dangerouslySetInnerHTML={{
                  __html: `(() => { try { const s = localStorage.getItem('theme'); if (s === 'dark' || s === 'light') { document.documentElement.classList.add(s); } else { if (window.matchMedia('(prefers-color-scheme: dark)').matches) { document.documentElement.classList.add('dark'); } } } catch(_) {} })();`,
               }}
            />
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
         </body>
      </html>
   );
}
