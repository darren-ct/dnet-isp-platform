import { useFindInternetService } from "../../../services/internet-services";
import { useMemo, useState } from "react";

export function useServicesDisplay() {
  const { data: servicePackages, isFetching } = useFindInternetService();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const serviceCategories = useMemo(() => {
    return ["All", "Wifi", "Data"];
  }, []);

  return {
    servicePackages,
    isFetching,
    serviceCategories,
    selectedCategory,
    setSelectedCategory,
  };
}
