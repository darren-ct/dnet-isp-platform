import { useRegisterPage } from "../../../features/register-page/hooks/use-register-page";
import { RegisterForm } from "../../../features/register-page";
import { Stack } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/register/")({
  component: RegisterPage,
});

function RegisterPage(): JSX.Element {
  const { isHideImage, imageWidth } = useRegisterPage();

  return (
    <Stack
      direction="row"
      spacing={12}
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      {!isHideImage && (
        <img
          src="/register-page/register-illustration.svg"
          width={imageWidth}
        />
      )}
      <RegisterForm />
    </Stack>
  );
}
