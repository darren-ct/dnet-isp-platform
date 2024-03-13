import { DashboardNavigation } from "../features/dashboard/components";
import { Container, Stack } from "@mui/material";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboard")({
  component: DashboardLayout,
});

function DashboardLayout() {
  return (
    <Stack direction="column" width="100wh" height="100vh">
      <DashboardNavigation />
      <Container sx={{ flex: 1, px: 4, py: 2 }}>
        <Outlet />
      </Container>
    </Stack>
  );
}
