import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { MainNavbar } from "@/components/navBar/navBar";

export const metadata: Metadata = {
  title: "Satellite AI",
  description: "This is a satellite AI application for detecting type of area from images.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning
        
      >
        <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                  >
                    <MainNavbar/>
        {children}
                  </ThemeProvider>
      </body>
    </html>
  );
}
