import { BaseNavigation } from "../components";
import { Container, Stack } from "@mui/material";
import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";

import Cookies from "js-cookie";

export const Route = createFileRoute("/_auth")({
  component: AuthLayout,
});

function AuthLayout() {
  const navigate = useNavigate();
  // Should be located at beforeLoad as middleware, but currently there is issue
  const token = Cookies.get("token");

  if (token) {
    navigate({ to: "/" });
  }

  return (
    <Stack width="100wh" height="100vh">
      <BaseNavigation />
      <Container sx={{ flex: 1, px: 4, py: 2 }}>
        <Outlet />
      </Container>
    </Stack>
  );
}
