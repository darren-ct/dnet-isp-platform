import { useServicesDisplay } from "..";
import { ServicePackageCard } from "../../../features/service-package";
import { Chip, Grid, Stack, TextField } from "@mui/material";

export function ServicesDisplay(): JSX.Element {
  const { serviceCategories, selectedCategory, setSelectedCategory } =
    useServicesDisplay();

  return (
    <Stack gap={4}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" gap={2} alignItems="center">
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
          sx={{ flex: 1, maxWidth: "320px" }}
        />
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
    </Stack>
  );
}
