import { useServicesDisplay } from "..";
import { ServicePackageCard } from "../../../features/service-package";
import { Chip, Grid, Skeleton, Stack, TextField } from "@mui/material";

export function ServicesDisplay(): JSX.Element {
  const {
    servicePackages,
    isFetching,
    serviceCategories,
    selectedCategory,
    setSelectedCategory,
  } = useServicesDisplay();

  return (
    <Stack gap={4}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        gap={2}
        flexWrap="wrap"
      >
        <Stack direction="row" gap={2} alignItems="center" flexWrap="wrap">
          {serviceCategories.map((item, index) => (
            <Chip
              key={index}
              label={item}
              variant={selectedCategory === item ? "filled" : "outlined"}
              color="primary"
              sx={{
                minWidth: 100,
                px: 4,
                py: 2,
                fontSize: 16,
                borderRadius: 48,
                cursor: "pointer",
              }}
              onClick={() => setSelectedCategory(item)}
            />
          ))}
        </Stack>
        <TextField
          size="small"
          placeholder="Search here..."
          sx={{ flex: 1, maxWidth: 320, minWidth: 240 }}
        />
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
    </Stack>
  );
}
