import type { Coach } from "../types/coaches";

export const getCoaches = async (): Promise<Coach[]> => {
  const response = await fetch("https://randomuser.me/api/?results=8");

  const data = await response.json();

  return data.results;
};
