export interface InternetServiceEntity {
  id: string;
  name: string;
  type: "WIFI" | "DATA";
  is_best_seller: true;
  spesifications: string[];
  price: number;
  duration: "DAILY" | "WEEKLY" | "MONTHLY";
}
