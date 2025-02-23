import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CerebrumVue",
  description: "Generated by create next app",
};

import { BrainRegionProvider } from "@/context/brain-region-context";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import CustomBreadcrumb from "@/components/custom-breadcrumb";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        
        <BrainRegionProvider>
        <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                  <main>
                    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                      <SidebarTrigger />
                      <Separator orientation="vertical" className="mr-2 h-4" />
                      <CustomBreadcrumb />
                    </header>
                    {children}
                  </main>
               
                </SidebarInset>
              </SidebarProvider>
        </BrainRegionProvider>
      </body>
    </html>
  );
}
