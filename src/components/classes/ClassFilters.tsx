"use client";

import * as React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Calendar } from "../ui/calendar";
import { Check } from "lucide-react";

import { cn } from "../../lib/utils";
import { Button } from "../ui/button";

type Props = {
  date: string;
  setDate: (value: string) => void;

  selectedBranch: string;
  setSelectedBranch: (value: string) => void;

  filterTypes: string[];
  toggleType: (type: string) => void;
};

export default function ClassFilters({
  date,
  setDate,
  selectedBranch,
  setSelectedBranch,
  filterTypes,
  toggleType,
}: Props) {
  const [calendarOpen, setCalendarOpen] = React.useState(false);

  const branches = ["Lembayung", "Gelora", "Arum"];
  const types = ["Reformer", "Chair", "Tower", "Mat", "Flexband"];

  const parsedDate = React.useMemo(() => {
    if (!date || date === "Pick a date") return undefined;
    const d = new Date(date);
    return isNaN(d.getTime()) ? undefined : d;
  }, [date]);

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 relative">
      {/* BRANCH DROPDOWN */}
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Button variant="outline" className="bg-white text-zinc-800">
            {selectedBranch || "All Branches"}
          </Button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content
          className="z-50 min-w-[180px] rounded-xl border bg-white p-2 shadow-lg"
          sideOffset={6}
        >
          <DropdownMenu.Item
            onClick={() => setSelectedBranch("")}
            className="flex cursor-pointer items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-zinc-100"
          >
            All Branches
            {!selectedBranch && <Check className="h-4 w-4" />}
          </DropdownMenu.Item>

          {branches.map((branch) => (
            <DropdownMenu.Item
              key={branch}
              onClick={() => setSelectedBranch(branch)}
              className="flex cursor-pointer items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-zinc-100"
            >
              {branch}
              {selectedBranch === branch && <Check className="h-4 w-4" />}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Root>

      {/* TYPE FILTER */}
      <div className="flex flex-wrap gap-2">
        {types.map((type) => (
          <Button
            key={type}
            type="button"
            variant="outline"
            onClick={() => toggleType(type)}
            className={cn(
              "bg-white text-zinc-600",
              filterTypes.includes(type) && "border-black border-2",
            )}
          >
            {type}
          </Button>
        ))}
      </div>

      {/* DATE */}
      <div className="relative w-full sm:w-auto">
        <Button
          variant="outline"
          className="bg-white text-zinc-600 w-full sm:w-auto"
          onClick={() => setCalendarOpen((v) => !v)}
        >
          {date}
        </Button>

        {calendarOpen && (
          <div className="absolute left-0 sm:left-auto sm:right-0 mt-2 z-50 rounded-xl border bg-white shadow-lg p-3 w-[280px] max-w-[90vw]">
            <Calendar
              mode="single"
              selected={parsedDate}
              onSelect={(d) => {
                if (!d) return;
                setDate(d.toISOString().split("T")[0]);
                setCalendarOpen(false);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
