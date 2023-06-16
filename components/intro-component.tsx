import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const IntroComponent = (): JSX.Element => {
  return (
    <div className="mb-20 text-center">
      <HoverCard>
        <HoverCardTrigger>
          <h1 className="inline">Hello</h1>
        </HoverCardTrigger>
        <HoverCardContent>The classic hello cycle XD</HoverCardContent>
      </HoverCard>
    </div>
  );
};

export { IntroComponent };
