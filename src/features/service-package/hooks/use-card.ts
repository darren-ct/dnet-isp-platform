import { ServicePackageCardProps } from "..";

import { useQueryClient } from "@tanstack/react-query";
import { useCallback, useMemo } from "react";
import { useCreateMyTransaction } from "../../../services/my-transactions/hooks/use-create-my-transaction";
import {
  MyTransactionStatusEnum,
  MyTransactionsServicesQueryKeyFactory,
} from "../../../services/my-transactions";
import { useToast } from "../../../hooks";
import { useGetUser } from "../../../services/auth";
import { internetServiceTypeIcon } from "..";

type UseServicePackageCardProps = ServicePackageCardProps;

export function useServicePackageCard({
  id,
  type,
  price,
  name,
}: UseServicePackageCardProps) {
  const queryClient = useQueryClient();
  const { data: userData } = useGetUser();
  const { mutateAsync, isPending } = useCreateMyTransaction();
  const { toast } = useToast();

  const queryKeyFactory = useMemo(
    () => new MyTransactionsServicesQueryKeyFactory(),
    []
  );

  const ServiceTypeIcon = internetServiceTypeIcon[type];

  const onPurchase = useCallback(async () => {
    await mutateAsync({
      packageName: name,
      price,
      status: MyTransactionStatusEnum.PENDING,
      user_id: userData?.id,
      internetServiceId: id,
    });
    await queryClient.invalidateQueries({ queryKey: queryKeyFactory.all() });
    toast("Package purchased!");
  }, [
    id,
    mutateAsync,
    name,
    price,
    queryClient,
    queryKeyFactory,
    toast,
    userData?.id,
  ]);

  return { isPending, ServiceTypeIcon, onPurchase };
}
