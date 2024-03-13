import { Stack } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboard/")({
  component: HomePage,
});

function HomePage(): JSX.Element {
  return (
    <Stack
      direction="row"
      spacing={12}
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      SIU
    </Stack>
  );
}
