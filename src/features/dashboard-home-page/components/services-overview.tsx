import { useFindInternetService } from "../../../services/internet-services";
import { ServicePackageCard } from "../../../features/service-package";
import { Box, Typography, Stack, Button, Grid, Skeleton } from "@mui/material";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useNavigate } from "@tanstack/react-router";

export function HomeServicesOverview(): JSX.Element {
  const navigate = useNavigate();
  const { data: servicePackages, isFetching } = useFindInternetService();

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
        {isFetching &&
          Array.from({ length: 8 }).map((_item, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={4} xl={4}>
              <Skeleton
                variant="rectangular"
                height={400}
                sx={{
                  borderRadius: 5,
                }}
              />
            </Grid>
          ))}

        {!isFetching &&
          servicePackages?.map((servicePackage) => (
            <Grid
              key={servicePackage.id}
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              xl={4}
            >
              <ServicePackageCard {...servicePackage} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}
