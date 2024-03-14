export enum MyTransactionStatusEnum {
  PENDING = "PENDING",
  FAILED = "FAILED",
  SUCCESS = "SUCCESS",
  EXPIRED = "EXPIRED",
}

export interface MyTransactionEntity {
  id: string;
  packageName: string;
  price: number;
  status: MyTransactionStatusEnum;
  createdAt: string;
  user_id: string;
  internetServiceId: string;
}
