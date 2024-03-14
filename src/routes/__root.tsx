import "dayjs/locale/id";

import dayjs from "dayjs";
dayjs.locale("id");

import { Snackbar } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { useNotificationStore } from "../stores";

export const Route = createRootRoute({
  component: Root,
});

const queryClient = new QueryClient();

export function Root(): JSX.Element {
  const { isOpen, message, onClose } = useNotificationStore();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <Snackbar
        open={isOpen}
        onClose={onClose}
        message={message}
        autoHideDuration={3000}
      />
    </QueryClientProvider>
  );
}
