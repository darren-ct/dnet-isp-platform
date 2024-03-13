import { LoginForm } from "../../../features/login-page";
import { Stack } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/login/")({
  component: LoginPage,
});

function LoginPage(): JSX.Element {
  return (
    <Stack
      direction="row"
      spacing={18}
      justifyContent="space-between"
      alignItems="center"
      height="100%"
    >
      <img src="/login-page/login-illustration.svg" width={400} />
      <LoginForm />
    </Stack>
  );
}
