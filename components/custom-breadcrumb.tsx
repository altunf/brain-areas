"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import React from "react";

export default function CustomBreadcrumb() {
  const pathname = usePathname();

  const breadcrumbItems = pathname
    .split("/")
    .filter((item) => item) // Boş elemanları temizleyelim
    .map((item, index, array) => {
      const path = `/${array.slice(0, index + 1).join("/")}`;
      return {
        label: item.replace("-", " "), // Gerektiğinde istenen formatta etiketleme
        href: path,
      };
    });

  return (
<Breadcrumb>
  <BreadcrumbList>
    {breadcrumbItems.map((item, index) => (
      <React.Fragment key={index}>
        <BreadcrumbItem>
          <BreadcrumbLink href={item.href}>
            {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
          </BreadcrumbLink>
        </BreadcrumbItem>
        {index < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
      </React.Fragment>
    ))}
  </BreadcrumbList>
</Breadcrumb>

  );
}