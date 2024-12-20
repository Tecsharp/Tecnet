import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import { ModeToggle } from "@/components/mode-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tecnet",
  description: "Servicios Tecsharp",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 2xl:grid-cols-3 gap-4 bg-gray-300 dark:bg-slate-900 py-8">
            <div></div>
            <div className="w-full sm:col-span-1 md:col-span-4 2xl:col-span-1">
              <header>
                <div className="flex items-center justify-between">
                  <ModeToggle />
                  <nav className="ml-auto text-sm font-medium space-x-6">
                    <Link href="http://192.168.4.200/phpmyadmin/">PhpMyAdmin</Link>
                  </nav>
                </div>
              </header>
            </div>
            <div></div>
          </div>
          <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
              <main>{children}</main>
            </div>
            <footer className="bg-gray-300 dark:bg-slate-900 p-4 w-full">
              <div className="container mx-auto text-center">
                <p className="mb-3"><a href="https://tecsharp.com.mx">Tecsharp Network | Next.js</a></p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
