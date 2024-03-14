export enum InternetServiceTypeEnum {
  WIFI = "WIFI",
  DATA = "DATA",
}

export enum InternetServiceDurationEnum {
  DAILY = "DAILY",
  WEEKLY = "WEEKLY",
  MONTHLY = "MONTHLY",
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
