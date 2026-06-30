import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";

import { Button } from "../ui/button";

export default function PrivateSession() {
  return (
    <Card className="group h-full rounded-3xl p-7 md:p-9 flex flex-col justify-between transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
      <CardHeader className="p-0">
        <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          Premium Service
        </span>

        <CardTitle className="font-serif text-4xl md:text-5xl leading-none mb-4">
          Private Training Session
        </CardTitle>

        <CardDescription className="text-sm leading-relaxed text-muted-foreground max-w-md">
          Fully personalized coaching designed around your body goals, movement
          patterns, and performance needs — just you and your instructor.
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1" />

      <CardFooter className="p-0 flex flex-col items-start gap-5">
        <div className="flex flex-wrap gap-2">
          {["1:1 Coaching", "Professional Certified Instructor"].map((tag) => (
            <span
              key={tag}
              className="text-[10px]  tracking-wider px-2.5 py-1 rounded-full border border-current text-muted-foreground opacity-80"
            >
              {tag}
            </span>
          ))}
        </div>

        <Button className="rounded-full px-8 py-6 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5">
          Book Session
        </Button>
      </CardFooter>
    </Card>
  );
}
