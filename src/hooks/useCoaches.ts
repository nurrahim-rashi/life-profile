import { useEffect, useState } from "react";
import type { Coach } from "../types/coaches";
import { getCoaches } from "../services/coach";

export function useCoaches() {
  const [coaches, setCoaches] = useState<Coach[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCoaches = async () => {
    try {
      const result = await getCoaches();
      setCoaches(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoaches();
  }, []);

  return {
    coaches,
    loading,
    refreshCoaches: fetchCoaches,
  };
}
