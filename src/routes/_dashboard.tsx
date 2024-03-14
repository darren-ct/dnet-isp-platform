import { Footer } from "../components/layout/footer";
import {
  CustomerServiceButton,
  DashboardNavigation,
} from "../features/dashboard/components";
import { Container, Stack } from "@mui/material";
import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";

import Cookies from "js-cookie";

export const Route = createFileRoute("/_dashboard")({
  component: DashboardLayout,
});

function DashboardLayout() {
  const navigate = useNavigate();
  // Should be located at beforeLoad as middleware, but currently there is issue
  const token = Cookies.get("token");

  if (!token) {
    navigate({ to: "/login" });
  }

  return (
    <Stack width="100wh" height="100vh">
      <DashboardNavigation />
      <Container sx={{ flex: 1, px: 4, pt: 14, pb: 4 }}>
        <Outlet />
      </Container>
      <Footer />
      <CustomerServiceButton />
    </Stack>
  );
}
