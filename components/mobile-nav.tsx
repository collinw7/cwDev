"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { PanelLeftOpen } from "lucide-react";

const MobileNav = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <div className="w-1/2 flex py-3 md:hidden">
          <Button variant="ghost" className="flex md:hidden px-2">
            <PanelLeftOpen />
          </Button>
        </div>
      </SheetTrigger>
      <SheetContent position="left"></SheetContent>
    </Sheet>
  );
};

export { MobileNav };
