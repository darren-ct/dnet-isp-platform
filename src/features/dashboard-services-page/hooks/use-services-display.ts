import { useFindInternetService } from "../../../services/internet-services";
import { useMemo, useState } from "react";

export function useServicesDisplay() {
  const { data: servicePackages } = useFindInternetService();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const serviceCategories = useMemo(() => {
    return ["All", "Wifi", "TV Cable"];
  }, []);

  return {
    servicePackages,
    serviceCategories,
    selectedCategory,
    setSelectedCategory,
  };
}
