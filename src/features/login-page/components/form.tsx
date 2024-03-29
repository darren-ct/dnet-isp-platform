import {
  Button,
  FormControl,
  FormLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { Controller, useForm } from "react-hook-form";
import { LoginSchema, loginSchema } from "../validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useLogin } from "../../../services/auth";
import { useToast } from "../../../hooks";
import { useNavigate } from "@tanstack/react-router";

export function LoginForm(): JSX.Element {
  const navigate = useNavigate();

  const { mutateAsync, isPending } = useLogin();

  const { toast } = useToast();

  const form = useForm<LoginSchema>({ resolver: zodResolver(loginSchema) });
  const { control, handleSubmit } = form;

  const onSubmit = useCallback(
    async (data: LoginSchema) => {
      try {
        await mutateAsync(data);
        toast("Login Successful!");
        navigate({ to: "/" });
      } catch (err) {
        console.error({ err });
        toast("Login Failed!");
      }
    },
    [mutateAsync, navigate, toast]
  );

  return (
    <form style={{ flex: 1, maxWidth: 540 }} onSubmit={handleSubmit(onSubmit)}>
      <Stack
        spacing={2.5}
        px={4}
        py={4}
        border="1px solid rgb(230, 234, 238)"
        borderRadius={1}
        bgcolor="white"
      >
        <Typography component="h1" variant="h4">
          Login
        </Typography>
        <Typography variant="body2" color="GrayText">
          To access and use our platform, please login with your email and
          password
        </Typography>
        <FormControl>
          <FormLabel sx={{ mb: 0.5 }}>Email</FormLabel>
          <Controller
            control={control}
            name="email"
            render={({ field, fieldState }) => (
              <TextField
                type="email"
                error={!!fieldState.error?.message}
                helperText={fieldState.error?.message}
                size="small"
                variant="filled"
                {...field}
              />
            )}
          />
        </FormControl>
        <FormControl>
          <FormLabel sx={{ mb: 0.5 }}>Password</FormLabel>
          <Controller
            control={control}
            name="password"
            render={({ field, fieldState }) => (
              <TextField
                error={!!fieldState.error?.message}
                helperText={fieldState.error?.message}
                size="small"
                variant="filled"
                {...field}
              />
            )}
          />
        </FormControl>
        <Button
          disabled={isPending}
          type="submit"
          size="large"
          variant="contained"
        >
          Login Now
        </Button>
        <Typography variant="caption">
          Are you new? <Link href="/register">Create an account</Link>
        </Typography>
      </Stack>
    </form>
  );
}
