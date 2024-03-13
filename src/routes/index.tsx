import { createFileRoute } from "@tanstack/react-router";
import { Box } from "@mui/material";

export const Route = createFileRoute("/")({
  component: () => <Box>Hello /!</Box>,
});
