import { useEffect, useState } from "react";
import type { Class } from "../types/class";
import { getClasses } from "../services/class";

export function useClasses() {
  const [classes, setClasses] = useState<Class[]>([]);
  const [loading, setLoading] = useState(true);

  const refreshClasses = async () => {
    try {
      const result = await getClasses();
      setClasses(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshClasses();
  }, []);

  return {
    classes,
    loading,
    refreshClasses,
  };
}
