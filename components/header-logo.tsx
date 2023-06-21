import { scrollTop } from "@/lib/scrollTop";
import LOGODARK from "@/public/header-dark.svg";
import LOGOLIGHT from "@/public/header-light.svg";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

const HeaderLogo = (): JSX.Element => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Skeleton className="h-10 w-40 mt-3" />;
  }

  return (
    <>
      <Image
        src={resolvedTheme === "dark" ? LOGODARK : LOGOLIGHT}
        alt="CWSE Logo"
        onClick={scrollTop}
        className="w-40 cursor-pointer hidden md:block"
      />
    </>
  );
};

export { HeaderLogo };
