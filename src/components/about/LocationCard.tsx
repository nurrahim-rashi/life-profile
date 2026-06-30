import { MapPin } from "lucide-react";
import type { Location } from "../../types/location";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

type Props = {
  location: Location;
};

export default function LocationCard({ location }: Props) {
  return (
    <Card className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <CardHeader>
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent" />

          <CardTitle>{location.name}</CardTitle>
        </div>
      </CardHeader>

      <CardContent>
        <p className="leading-relaxed text-muted-foreground">
          {location.address}
        </p>
      </CardContent>

      <CardFooter>
        <button
          onClick={() => window.open(location.link, "_blank")}
          className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/90"
        >
          Get Directions
        </button>
      </CardFooter>
    </Card>
  );
}
