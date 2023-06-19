import { UserPlus } from "lucide-react";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ui/theme-toggle";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "./ui/tooltip";

const GlobalHeader = (): JSX.Element => {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full bg-background/80 backdrop-blur">
      <div className="px-6 flex container">
        <MainNav />
        <MobileNav />
        <div className="flex w-1/2 justify-end space-x-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" className="px-2 my-3">
                  <UserPlus />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>My socials</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export { GlobalHeader };
