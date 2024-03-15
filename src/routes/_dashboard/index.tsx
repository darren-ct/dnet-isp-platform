import {
  HomeBanner,
  HomeServicesOverview,
} from "../../features/dashboard-home-page";
import { Stack } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboard/")({
  component: HomePage,
});

function HomePage(): JSX.Element {
  return (
    <Stack flex={1} gap={8}>
      <HomeBanner />
      <HomeServicesOverview />
    </Stack>
  );
}
