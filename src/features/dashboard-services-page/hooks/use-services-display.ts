import { useMemo, useState } from "react";

export function useServicesDisplay() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const serviceCategories = useMemo(() => {
    return ["All", "Wifi", "TV Cable"];
  }, []);

  return { serviceCategories, selectedCategory, setSelectedCategory };
}
