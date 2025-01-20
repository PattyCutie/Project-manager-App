"use client";
import React, { useEffect, useState } from "react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { Sidebar } from "./sidebar";
import { usePathname } from "next/navigation";

export const MobileSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <Sheet
      modal={false}
      open={isOpen}
      onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="secondary"
          className="lg:hidden">
          <MenuIcon className="size-4 text-neutral-500" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="p-0">
        <Sidebar />
        <VisuallyHidden.Root>
          <SheetTitle>Menu</SheetTitle>
        </VisuallyHidden.Root>
        <VisuallyHidden.Root>
          <SheetDescription>
            Navigate to your pages & settings
          </SheetDescription>
        </VisuallyHidden.Root>
      </SheetContent>
    </Sheet>
  );
};
