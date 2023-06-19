"use client";

import { ThemeSwitch } from "./theme-switch";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ThemeToggle = (): JSX.Element => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <></>;
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
