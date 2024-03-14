export enum InternetServiceTypeEnum {
  "WIFI",
  "DATA",
}

export enum InternetServiceDurationEnum {
  "DAILY",
  "WEEKLY",
  "MONTHLY",
}

export interface InternetServiceEntity {
  id: string;
  name: string;
  type: InternetServiceTypeEnum;
  isBestSeller: true;
  spesifications: string[];
  price: number;
  duration: InternetServiceDurationEnum;
}
