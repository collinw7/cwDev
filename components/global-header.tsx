import { UserPlus } from "lucide-react";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ui/theme-toggle";
import Link from "next/link";

const GlobalHeader = (): JSX.Element => {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full bg-background/80 backdrop-blur">
      <div className="px-12 flex container mx-0 max-w-full">
        <MainNav />
        <MobileNav />
        <div className="flex w-1/2 justify-end space-x-4">
          <Button className="px-2 my-3">
            <Link href="">
              <UserPlus />
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export { GlobalHeader };
