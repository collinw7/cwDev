"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import Link from "next/link";
import { scrollTop } from "@/lib/scrollTop";

const MainNav = (): JSX.Element => {
  return (
    <div className="hidden md:flex w-1/2">
      <h3 className="py-4 cursor-pointer" onClick={scrollTop}>
        CWSE
      </h3>
      <NavigationMenu className="ml-10 justify-start space-x-2">
        <NavigationMenuItem className="list-none">
          <Link href="#about-me" replace legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Me
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="list-none">
          <Link href="" replace legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Projects
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenu>
    </div>
  );
};

export { MainNav };
