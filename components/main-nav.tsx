"use client";

import { ReactNode } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import Link from "next/link";
import { scrollTop } from "@/lib/scrollTop";

type LinkProps = {
  children: ReactNode;
  href: string;
};

const NavLink = ({ children, href }: LinkProps): JSX.Element => {
  return (
    <NavigationMenuItem className="list-none">
      <Link href={href} replace legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          {children}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};

const MainNav = (): JSX.Element => {
  return (
    <div className="hidden md:flex w-1/2">
      <h3 className="py-4 cursor-pointer" onClick={scrollTop}>
        CWSE
      </h3>
      <NavigationMenu className="ml-10 justify-start space-x-2">
        <NavLink href="#about-me">About Me</NavLink>
        <NavLink href="#projects">Projects</NavLink>
      </NavigationMenu>
    </div>
  );
};

export { MainNav };
