import { WifiIcon } from "../../../assets/icons";
import {
  Box,
  Button,
  Chip,
  Stack,
  StackProps,
  Typography,
} from "@mui/material";
import { CheckCircledIcon } from "@radix-ui/react-icons";

type ServicePackageCardProps = StackProps;

export function ServicePackageCard({
  ...rest
}: ServicePackageCardProps): JSX.Element {
  return (
    <Stack
      border="1px solid rgba(0, 0, 0, .1)"
      borderRadius={5}
      overflow="hidden"
      {...rest}
    >
      <Stack
        position="relative"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
        bgcolor="primary.main"
        color="white"
        px={2}
        py={8}
      >
        <WifiIcon />
        <Typography fontWeight={500}>Paket 1</Typography>
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
      </Stack>

      <Box px={2} py={3} bgcolor="white">
        <Stack direction="column" gap={2}>
          <Typography variant="caption">Spesifikasi:</Typography>
          <Stack direction="row" alignItems="center" gap={1}>
            <CheckCircledIcon width={18} height={18} color="#1976d2" />
            <Typography variant="caption" fontWeight={600}>
              Promo biaya pasang menjadi Rp50.000
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" gap={1}>
            <CheckCircledIcon width={18} height={18} color="#1976d2" />
            <Typography variant="caption" fontWeight={600}>
              Promo biaya pasang menjadi Rp50.000
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" gap={1}>
            <CheckCircledIcon width={18} height={18} color="#1976d2" />
            <Typography variant="caption" fontWeight={600}>
              Promo biaya pasang menjadi Rp50.000
            </Typography>
          </Stack>
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
          Rp 500.000,- / bulan
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
