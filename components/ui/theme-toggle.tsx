"use client";

import { ThemeSwitch } from "./theme-switch";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Skeleton } from "./skeleton";

const ThemeToggle = (): JSX.Element => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Skeleton className="w-12 h-5 mt-6"/>;
  }

  return (
    <div className="pt-5 pb-3">
      <ThemeSwitch
        id="theme-toggle"
        defaultChecked={resolvedTheme === "dark"}
        onCheckedChange={(checked: boolean) => {
          if (!checked) {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
      />
    </div>
  );
};

export { ThemeToggle };
