"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "./ui/sheet";
import { scrollTop } from "@/lib/scrollTop";
import Link from "next/link";
import { LinkProps } from "@/lib/linkProps";
import { HeaderLogo } from "./header-logo";
import { PanelLeftOpen } from "lucide-react";

const MobileNavLink = ({ href, children }: LinkProps): JSX.Element => {
  return (
    <SheetClose asChild>
      <Link href={href} replace passHref>
        {children}
      </Link>
    </SheetClose>
  );
};

const MobileNav = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <div className="w-1/2 flex py-3 md:hidden">
          <Button variant="static" className="px-2 ml-[-0.5rem]">
            <PanelLeftOpen />
          </Button>
        </div>
      </SheetTrigger>
      <SheetContent position="left">
        <SheetClose asChild>
          <SheetTitle className="cursor-pointer pt-4" onClick={scrollTop}>
            <HeaderLogo />
          </SheetTitle>
        </SheetClose>
        <div className="flex flex-col space-y-4 pt-2">
          <MobileNavLink href="#about-me">About Me</MobileNavLink>
          <MobileNavLink href="#projects">Projects</MobileNavLink>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export { MobileNav };
