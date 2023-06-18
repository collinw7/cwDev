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
import { MenuSquare } from "lucide-react";
import { scrollTop } from "@/lib/scrollTop";

const MobileNav = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <div className="w-1/2 flex py-3 md:hidden">
          <Button variant="ghost" className="flex md:hidden px-2">
            <MenuSquare />
          </Button>
        </div>
      </SheetTrigger>
      <div>
        <h3 className="py-4 md:hidden cursor-pointer" onClick={scrollTop}>
          CWSE
        </h3>
      </div>
      <SheetContent position="left">
      </SheetContent>
    </Sheet>
  );
};

export { MobileNav };
