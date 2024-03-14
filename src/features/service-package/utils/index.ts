import { FC } from "react";
import {
  InternetServiceDurationEnum,
  InternetServiceTypeEnum,
} from "../../../services/internet-services";
import { MobilePhoneIcon, WifiIcon } from "../../../assets/icons";

export const internetServiceDurationLabel: Record<
  InternetServiceDurationEnum,
  string
> = {
  DAILY: "hari",
  WEEKLY: "minggu",
  MONTHLY: "bulan",
};

export const internetServiceTypeIcon: Record<InternetServiceTypeEnum, FC> = {
  WIFI: WifiIcon,
  DATA: MobilePhoneIcon,
};
