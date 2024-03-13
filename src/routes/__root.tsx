// import { ThemeProvider } from "@mui/material";
import { Outlet, createRootRoute } from "@tanstack/react-router";
// import { theme } from "../lib";

export const Route = createRootRoute({
  component: () => (
    // <ThemeProvider theme={theme}>
    <Outlet />
    // </ThemeProvider>
  ),
});
