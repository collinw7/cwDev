"use client";

import { Label } from "./label";
import { Switch } from "./switch";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonStar, Sun } from "lucide-react";

const ThemeToggle = (): JSX.Element => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <></>;
  }

  return (
    <>
      <Switch
        id="theme-toggle"
        defaultChecked={theme === "dark"}
        onCheckedChange={(checked: boolean) => {
          if (!checked) {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
      />
      <Label htmlFor="theme-toggle" className="h-auto">
        <MoonStar />
      </Label>
    </>
  );
};

export { ThemeToggle };
