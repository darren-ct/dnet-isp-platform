import { HomeServicesOverview } from "../../features/dashboard-home-page";
import { Stack, Box } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboard/")({
  component: HomePage,
});

function HomePage(): JSX.Element {
  return (
    <Stack flex={1} flexDirection="column" gap={8}>
      <Box bgcolor="rgba(0,0,0,.1)" width="100%" height={360} />
      <HomeServicesOverview />
    </Stack>
  );
}
