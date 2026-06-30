import { useMemo, useState } from "react";

import type { Class } from "../types/class";
import { useClasses } from "../hooks/useClass";

import ClassFilters from "../components/classes/ClassFilters";
import ClassList from "../components/classes/ClassList";
import BookingModal from "../components/classes/BookingModal";
import PrivateSession from "../components/classes/PrivateSession";
import ClassPopularityChart from "../components/classes/Chart";

export default function Classes() {
  const { classes, loading } = useClasses();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState<Class | null>(null);
  const [selectedBranch, setSelectedBranch] = useState("");
  const [filterTypes, setFilterTypes] = useState<string[]>([]);
  const [date, setDate] = useState("Pick a date");

  const [isMember, setIsMember] = useState(true);
  const [memberCode, setMemberCode] = useState("");

  const toggleType = (type: string) => {
    setFilterTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  };

  const filteredClasses = useMemo(() => {
    return classes.filter((c) => {
      const branchMatch = !selectedBranch || c.branch === selectedBranch;
      const typeMatch =
        filterTypes.length === 0 || filterTypes.includes(c.type);

      return branchMatch && typeMatch;
    });
  }, [classes, selectedBranch, filterTypes]);

  return (
    <section className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-center mb-16 text-zinc-800">
          Our Classes
        </h1>
        <ClassFilters
          date={date}
          setDate={setDate}
          selectedBranch={selectedBranch}
          setSelectedBranch={setSelectedBranch}
          filterTypes={filterTypes}
          toggleType={toggleType}
        />
        <ClassList
          classes={filteredClasses}
          loading={loading}
          onBook={(item) => {
            setSelectedClass(item);
            setIsBookingOpen(true);
          }}
        />{" "}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="h-full">
            <PrivateSession />
          </div>

          <div className="h-full">
            <ClassPopularityChart />
          </div>
        </div>{" "}
      </div>
    </section>
  );
}
