"use client";

import { ReactNode } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import Link from "next/link";
import { HeaderLogo } from "./header-logo";

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
      <HeaderLogo />
      <NavigationMenu className="ml-5 justify-start space-x-2">
        <NavLink href="#about-me">About Me</NavLink>
        <NavLink href="#projects">Projects</NavLink>
      </NavigationMenu>
    </div>
  );
};

export { MainNav };
