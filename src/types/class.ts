export interface Class {
  id?: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: number;
  description: string;
}
