"use client";

import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import Link from "next/link";

const MainNav = (): JSX.Element => {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full bg-background/80 backdrop-blur">
      <div className="p-4 flex items-center container">
        <div className="flex w-1/2">
          <h3>CWSE</h3>
          <NavigationMenu className="ml-10 justify-start space-x-2">
            <NavigationMenuItem className="list-none">
              <Link href="#about-me" scroll={false} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About Me
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="list-none">
              <Link href="" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Projects
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenu>
        </div>
        <div className="flex w-1/2 justify-end space-x-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export { MainNav };
