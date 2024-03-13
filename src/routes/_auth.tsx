import { BaseNavigation } from "../components";
import { Container, Stack } from "@mui/material";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
  component: AuthLayout,
});

function AuthLayout() {
  return (
    <Stack direction="column" width="100wh" height="100vh">
      <BaseNavigation />
      <Container sx={{ flex: 1, px: 4, py: 2 }}>
        <Outlet />
      </Container>
    </Stack>
  );
}
