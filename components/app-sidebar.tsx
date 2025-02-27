"use client";
import * as React from "react";
import { usePathname } from 'next/navigation'; 
import { Label } from "@/components/ui/label";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { NavSecondary } from "./nav-secondary";
import { getSidebarData } from "@/constants/sidebar-data";
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from "./ui/button";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const router = useRouter();
  const locale = useLocale();
  const sidebarData = getSidebarData();
  // Initialize with null to prevent hydration mismatch
  const [activeItem, setActiveItem] = React.useState<any>(null);
  const [models, setModels] = React.useState<any[]>([]);
  const { setOpen } = useSidebar();
  const pathname = usePathname();
  
  // Set initial values after component mounts
  useEffect(() => {
    setActiveItem(sidebarData.navMain[0]);
    setModels(sidebarData.models);
  }, []);
  
  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'tr' : 'en';
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };
  

  if (!activeItem || !models.length) {
    return null; 
  }
  return (
    <Sidebar
      collapsible="icon"
      className="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row"
      {...props}
    >
      <Sidebar
        collapsible="none"
        className="!w-[calc(var(--sidebar-width-icon)_+_1px)] border-r"
      >
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
                <a href="/">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <Image
                      height={30}
                      width={30}
                      src={"/neuron.png"}
                      alt="logo"
                    />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">CerebrumVue</span>
                    <span className="truncate text-xs">3D Brain Explorer</span>
                  </div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent className="px-1.5 md:px-0">
              <SidebarMenu>
                <SidebarTrigger className="ml-[3px]" />
                {sidebarData.navMain.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      tooltip={{
                        children: item.title,
                        hidden: false,
                      }}
                      onClick={() => {
                        setActiveItem(item);
                        const model = sidebarData.models.sort(
                          () => Math.random() - 0.5
                        );
                        setOpen(true);
                      }}
                      isActive={activeItem.title === item.title}
                      className="px-2.5 md:px-2"
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <NavSecondary items={sidebarData.navSecondary} className="mt-auto" />
        </SidebarContent>
      </Sidebar>

      {/* This is the second sidebar */}
      <Sidebar collapsible="none" className="hidden flex-1 md:flex">
        <SidebarHeader className="gap-3.5 border-b p-4">
          <div className="flex w-full items-center justify-between">
            <div className="text-base font-medium text-foreground">
            {/*   {activeItem.title} */}
            Brainteract
            </div>
            <Label className="flex items-center gap-2 text-sm">
              <Button variant="ghost" onClick={toggleLanguage}>{locale === 'en' ? 'TR' : 'EN'}</Button>
            </Label>
          </div>
      {/*     <SidebarInput placeholder="Type to search..." /> */}
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="px-0">
            <SidebarGroupContent>
              {models.map((model) => (
                <a
                  href={model.href}
                  key={model.name}
                  className="flex flex-col items-start gap-2 whitespace-nowrap border-b p-4 text-sm leading-tight last:border-b-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                >
                  <span className="font-medium">{model.name}</span>
                  <span className="line-clamp-2 w-[260px] whitespace-break-spaces text-xs">
                    {model.desc}
                  </span>
                </a>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </Sidebar>
  );
}
