import { InternetServiceEntity } from "@/services/internet-services";
import {
  Box,
  Button,
  Chip,
  Stack,
  StackProps,
  Typography,
} from "@mui/material";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { internetServiceDurationLabel, internetServiceTypeIcon } from "..";
import { applyEllipsis } from "../../../utils";

type ServicePackageCardProps = InternetServiceEntity & StackProps;

export function ServicePackageCard({
  name,
  type,
  isBestSeller,
  spesifications,
  price,
  duration,
  ...rest
}: ServicePackageCardProps): JSX.Element {
  const ServiceTypeIcon = internetServiceTypeIcon[type];

  return (
    <Stack
      border="1px solid rgba(0, 0, 0, .1)"
      borderRadius={5}
      overflow="hidden"
      {...rest}
    >
      <Stack
        position="relative"
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
        bgcolor="primary.main"
        color="white"
        px={2}
        py={8}
      >
        <ServiceTypeIcon />
        <Typography fontWeight={500} sx={{ ...applyEllipsis() }}>
          {name}
        </Typography>
        {isBestSeller && (
          <Chip
            label="Best-seller"
            sx={{
              position: "absolute",
              right: 16,
              bottom: 12,
              fontWeight: 600,
              bgcolor: "#EFD101",
              fontSize: 12,
            }}
          />
        )}
      </Stack>

      <Box px={2} py={3} bgcolor="white">
        <Stack gap={2}>
          <Typography variant="caption">Spesifikasi:</Typography>
          {spesifications.map((item, index) => (
            <Stack key={index} direction="row" alignItems="center" gap={1}>
              <CheckCircledIcon width={18} height={18} color="#1976d2" />
              <Typography variant="caption" fontWeight={600}>
                {item}
              </Typography>
            </Stack>
          ))}
        </Stack>

        <Typography
          component="p"
          variant="h6"
          color="primary.main"
          fontWeight={600}
          textAlign="end"
          mt={5}
          mb={1}
        >
          Rp {price.toLocaleString()},-{" "}
          <Typography component="span" variant="caption">
            / {internetServiceDurationLabel[duration]}{" "}
          </Typography>
        </Typography>

        <Button
          fullWidth
          variant="contained"
          sx={{
            textTransform: "none",
            borderRadius: 3,
          }}
        >
          Pilih Paket
        </Button>
      </Box>
    </Stack>
  );
}
