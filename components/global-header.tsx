import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./ui/theme-toggle";

const GlobalHeader = (): JSX.Element => {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full bg-background/80 backdrop-blur">
      <div className="px-12 flex container">
        <MainNav />
        <MobileNav />
        <div className="flex w-1/2 justify-end space-x-2 py-5">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export { GlobalHeader };
