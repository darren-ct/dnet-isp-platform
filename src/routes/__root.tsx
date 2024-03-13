// import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRoute } from "@tanstack/react-router";
// import { theme } from "../lib";

export const Route = createRootRoute({
  component: Root,
});

const queryClient = new QueryClient();

export function Root(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
