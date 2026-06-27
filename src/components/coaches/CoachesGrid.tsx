import type { Coach } from "../../types/coaches";
import CoachCard from "./CoachCard";
import CoachSkeleton from "./CoachSkeleton";

type Props = {
  coaches: Coach[];
  loading: boolean;
};

export default function CoachesGrid({ coaches, loading }: Props) {
  const skeletonCards = Array.from({
    length: 8,
  });

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {loading &&
        skeletonCards.map((_, index) => <CoachSkeleton key={index} />)}

      {!loading &&
        coaches.map((coach, index) => (
          <CoachCard key={coach.email} coach={coach} index={index} />
        ))}
    </div>
  );
}
