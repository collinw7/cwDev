import { ReactNode } from "react";

export type LinkProps = {
  children?: ReactNode;
  href: string;
  type?: string;
}