import { MapPin } from "lucide-react";
import type { Location } from "../../types/location";

type Props = {
  location: Location;
};

export default function LocationCard({ location }: Props) {
  return (
    <div className="p-8 rounded-3xl bg-zinc-50 hover:bg-zinc-100 transition group">
      <div className="flex items-center gap-2 mb-3">
        <MapPin className="w-5 h-5 text-zinc-500 group-hover:text-green-500 transition" />

        <h3 className="font-semibold">{location.name}</h3>
      </div>

      <p className="text-zinc-600">{location.address}</p>

      <button
        onClick={() => window.open(location.link, "_blank")}
        className="
          mt-6
          bg-black
          text-white
          px-6
          py-3
          rounded-full
          font-medium
          transition-all
          hover:bg-green-800
          hover:-translate-y-0.5
        "
      >
        Get Directions
      </button>
    </div>
  );
}
