import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";  
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brainteract",
  description: "Generated by firat altun",
};

import { BrainRegionProvider } from "@/context/brain-region-context";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'tr' }];
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <BrainRegionProvider>
            <SidebarProvider
              style={
                {
                  "--sidebar-width": "350px",
                } as React.CSSProperties
              }
            >
              <AppSidebar />
              <SidebarInset>
                <main>
                  {children}
                </main>
              </SidebarInset>
            </SidebarProvider>
          </BrainRegionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
