import { useFindInternetService } from "../../../services/internet-services";
import { ServicePackageCard } from "../../../features/service-package";
import { Box, Typography, Stack, Button, Grid } from "@mui/material";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useNavigate } from "@tanstack/react-router";

export function HomeServicesOverview(): JSX.Element {
  const navigate = useNavigate();
  const { data } = useFindInternetService();
  console.log({ data });

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Stack alignItems="start">
          <Typography
            component="h1"
            variant="h5"
            fontWeight={500}
            textAlign="center"
          >
            Our Services
          </Typography>
          <Typography variant="body2">
            Choose your desired service package.
          </Typography>
        </Stack>

        <Button
          size="large"
          sx={{ textTransform: "none", fontSize: 16 }}
          endIcon={<ArrowRightIcon width={24} height={24} />}
          onClick={() => navigate({ to: "/services" })}
        >
          See all
        </Button>
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <ServicePackageCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <ServicePackageCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <ServicePackageCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <ServicePackageCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <ServicePackageCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <ServicePackageCard />
        </Grid>
      </Grid>
    </Box>
  );
}
