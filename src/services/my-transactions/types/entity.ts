export enum MyTransactionStatusEnum {
  "PENDING",
  "FAILED",
  "SUCCESS",
  "EXPIRED",
}

export interface MyTransactionEntity {
  id: string;
  packageName: string;
  price: number;
  status: MyTransactionStatusEnum;
  updatedAt: string;
  userId: string;
  internetServiceId: string;
}
