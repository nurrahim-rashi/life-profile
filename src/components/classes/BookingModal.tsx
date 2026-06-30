"use client";

import type { Class } from "../../types/class";

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

import { Button } from "../ui/button";

type Props = {
  open: boolean;
  onOpenChange: (v: boolean) => void;

  selectedClass: Class | null;

  isMember: boolean;
  setIsMember: (value: boolean) => void;

  memberCode: string;
  setMemberCode: (value: string) => void;
};

export default function BookingModal({
  open,
  onOpenChange,
  selectedClass,
  isMember,
  setIsMember,
  memberCode,
  setMemberCode,
}: Props) {
  const handleBooking = () => {
    if (!selectedClass) return;

    alert(`Booked ${selectedClass.type} at ${selectedClass.branch}`);

    onOpenChange(false); // ✅ FIX CLOSE MODAL
  };

  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <span />
      </PopoverTrigger>

      <PopoverContent
        className="w-[420px] p-6 rounded-xl border bg-white shadow-xl"
        align="center"
        sideOffset={10}
      >
        {/* INFO */}
        <div className="space-y-3 text-sm text-zinc-600 mb-6">
          <div>
            <p className="text-xs text-zinc-400">Class</p>
            <p className="font-medium">{selectedClass?.type}</p>
          </div>

          <div>
            <p className="text-xs text-zinc-400">Branch</p>
            <p className="font-medium">{selectedClass?.branch}</p>
          </div>

          <div>
            <p className="text-xs text-zinc-400">Schedule</p>
            <p className="font-medium">
              {selectedClass
                ? new Date(selectedClass.classDate).toLocaleString()
                : "-"}
            </p>
          </div>
        </div>

        {/* MEMBER TOGGLE */}
        <div className="flex gap-2 mb-4">
          <Button
            type="button"
            variant={isMember ? "default" : "outline"}
            className="flex-1"
            onClick={() => setIsMember(true)}
          >
            Member
          </Button>

          <Button
            type="button"
            variant={!isMember ? "default" : "outline"}
            className="flex-1"
            onClick={() => setIsMember(false)}
          >
            Non-Member
          </Button>
        </div>

        {/* CODE */}
        {isMember && (
          <input
            value={memberCode}
            onChange={(e) => setMemberCode(e.target.value)}
            placeholder="Member code"
            className="w-full border rounded-md px-3 py-2 text-sm mb-4"
          />
        )}

        {/* ACTION */}
        <Button className="w-full" onClick={handleBooking}>
          Confirm Booking
        </Button>
      </PopoverContent>
    </Popover>
  );
}
