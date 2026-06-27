import type { Coach } from "../../types/coaches";

const roles = [
  "Senior Pilates Instructor",
  "Equipment Pilates Specialist",
  "Non-Equipment Pilates Expert",
];

type Props = {
  coach: Coach;
  index: number;
};

export default function CoachCard({ coach, index }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden text-zinc-600">
      <img
        src={coach.picture.large}
        alt={coach.name.first}
        className="w-full h-72 object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-semibold">
          {coach.name.first} {coach.name.last}
        </h2>

        <p className="text-green-700 font-medium mt-1">
          {roles[index % roles.length]}
        </p>
      </div>
    </div>
  );
}
