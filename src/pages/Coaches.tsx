import { useEffect, useState } from "react";
import type { Coach } from "../types/coaches";

const roles = [
  "Senior Pilates Instructor",
  "Equipment Pilates Specialist",
  "Non-Equipment Pilates Expert",
];

// skeleton array biar rapi
const skeletonCards = Array.from({ length: 8 });

function Coaches() {
  const [members, setMembers] = useState<Coach[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=8");
        const data = await response.json();
        setMembers(data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-5xl font-bold text-center mb-12">Our Coaches</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* 🧊 SKELETON STATE */}
        {loading &&
          skeletonCards.map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse"
            >
              {/* image skeleton */}
              <div className="w-full h-72 bg-gray-200" />

              <div className="p-5 space-y-3">
                <div className="h-5 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
                <div className="h-3 bg-gray-200 rounded w-full" />
                <div className="h-3 bg-gray-200 rounded w-5/6" />
              </div>
            </div>
          ))}

        {/* 💃 REAL DATA */}
        {!loading &&
          members.map((member, index) => (
            <div
              key={member.email}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <img
                src={member.picture.large}
                alt={member.name.first}
                className="w-full h-72 object-cover"
              />

              <div className="p-5">
                <h2 className="text-xl font-semibold">
                  {member.name.first} {member.name.last}
                </h2>

                <p className="text-green-700 font-medium mt-1">
                  {roles[index % roles.length]}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Coaches;
