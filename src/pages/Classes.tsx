import { useMemo, useState } from "react";

import type { Class } from "../types/class";

import { useClasses } from "../hooks/useClass";

import ClassFilters from "../components/classes/ClassFilters";
import ClassList from "../components/classes/ClassList";
import BookingModal from "../components/classes/BookingModal";
import PrivateSession from "../components/classes/PrivateSession";

export default function Classes() {
  const { classes, loading } = useClasses();

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
        <h2 className="text-5xl font-bold text-center mb-20 text-zinc-800">
          Our Classes
        </h2>

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

            (
              document.getElementById("booking_modal") as HTMLDialogElement
            )?.showModal();
          }}
        />

        <PrivateSession />

        <BookingModal
          selectedClass={selectedClass}
          isMember={isMember}
          setIsMember={setIsMember}
          memberCode={memberCode}
          setMemberCode={setMemberCode}
        />
      </div>
    </section>
  );
}
