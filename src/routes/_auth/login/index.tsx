import { LoginForm } from "../../../features/login-page";
import { Stack } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";
import { useLoginPage } from "../../../features/login-page/hooks/use-login-page";

export const Route = createFileRoute("/_auth/login/")({
  component: LoginPage,
});

function LoginPage(): JSX.Element {
  const { isHideImage, imageWidth } = useLoginPage();

  return (
    <Stack
      direction="row"
      spacing={12}
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      {!isHideImage && (
        <img src="/login-page/login-illustration.svg" width={imageWidth} />
      )}
      <LoginForm />
    </Stack>
  );
}
