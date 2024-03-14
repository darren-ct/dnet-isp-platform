import { DashboardNavigation } from "../features/dashboard/components";
import { Container, Stack } from "@mui/material";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboard")({
  component: DashboardLayout,
});

function DashboardLayout() {
  return (
    <Stack width="100wh" height="100vh">
      <DashboardNavigation />
      <Container sx={{ flex: 1, px: 4, pt: 14, pb: 4 }}>
        <Outlet />
      </Container>
    </Stack>
  );
}
