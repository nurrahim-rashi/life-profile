import Backendless from "../lib/backendless";
import type { Class } from "../types/class";

export const getClasses = async (): Promise<Class[]> => {
  const result = await Backendless.Data.of("Classes").find();

  return [...result].sort(
    (a: any, b: any) =>
      new Date(a.datetime).getTime() - new Date(b.datetime).getTime(),
  ) as Class[];
};
