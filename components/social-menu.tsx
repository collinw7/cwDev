import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  UserPlus,
} from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "./ui/dialog";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "./ui/tooltip";
import { Avatar } from "./ui/avatar";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";
import { LinkProps } from "@/lib/linkProps";

const SocialLink = ({ href, children, type }: LinkProps): JSX.Element => {
  return (
    <>
      <Link href={href} target="blank" className="flex hover:[&>p]:text-accent-foreground">
        {type === "avatar" ? (
          <Avatar />
        ) : type === "linkedin" ? (
          <LinkedinIcon />
        ) : type === "instagram" ? (
          <InstagramIcon />
        ) : type === "github" ? (
          <GithubIcon />
        ) : (
          <Skeleton className="h-4 w-4 rounded-full my-[0.375rem]" />
        )}
        <p className="!mt-0 ml-2">{children}</p>
      </Link>
    </>
  );
};

const SocialMenu = (): JSX.Element => {
  return (
    <Dialog>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
              <Button variant="ghost" className="px-2 my-3">
                <UserPlus />
              </Button>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>My socials</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DialogContent className="w-[20%]">
        <DialogTitle>Socials</DialogTitle>
        <div className="space-y-2">
          <SocialLink href="https://www.linkedin.com/in/cwse/" type="linkedin">
            LinkedIn
          </SocialLink>
          <SocialLink href="https://github.com/cwse1" type="github">
            GitHub
          </SocialLink>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { SocialMenu };
