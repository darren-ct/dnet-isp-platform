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
import { RegisterSchema, registerSchema } from "../validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useRegister } from "../../../services/auth";
import { useToast } from "../../../hooks";
import { useNavigate } from "@tanstack/react-router";

export function RegisterForm(): JSX.Element {
  const navigate = useNavigate();

  const { mutateAsync } = useRegister();

  const { toast } = useToast();

  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });
  const { control, handleSubmit } = form;

  const onSubmit = useCallback(
    async (data: RegisterSchema) => {
      try {
        await mutateAsync(data);
        toast("Register Successful!");
        navigate({ to: "/" });
      } catch (err) {
        console.error({ err });
        toast("Register Failed!");
      }
    },
    [mutateAsync, navigate, toast]
  );

  return (
    <form style={{ flex: 1, maxWidth: 600 }} onSubmit={handleSubmit(onSubmit)}>
      <Stack
        spacing={2.5}
        px={4}
        py={4}
        border="1px solid rgb(230, 234, 238)"
        borderRadius={1}
        bgcolor="white"
      >
        <Typography component="h1" variant="h4">
          Register
        </Typography>
        <Typography variant="body2" color="GrayText">
          To access and use our platform, please register first
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
        <FormControl>
          <FormLabel sx={{ mb: 0.5 }}>Full Name</FormLabel>
          <Controller
            control={control}
            name="data.fullName"
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
        <FormControl>
          <FormLabel sx={{ mb: 0.5 }}>Phone Number</FormLabel>
          <Controller
            control={control}
            name="data.phoneNumber"
            render={({ field, fieldState }) => (
              <TextField
                type="tel"
                error={!!fieldState.error?.message}
                helperText={fieldState.error?.message}
                size="small"
                variant="filled"
                {...field}
              />
            )}
          />
        </FormControl>
        <Button type="submit" size="large" variant="contained">
          Register Now
        </Button>
        <Typography variant="caption">
          Already have an account? <Link href="/login">Login here</Link>
        </Typography>
      </Stack>
    </form>
  );
}
