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

export function LoginForm(): JSX.Element {
  const form = useForm();
  const { control } = form;

  return (
    <Stack
      flex={1}
      spacing={2}
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
        <FormLabel>Username</FormLabel>
        <Controller
          control={control}
          name="username"
          render={({ field }) => (
            <TextField size="small" variant="filled" {...field} />
          )}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <TextField size="small" variant="filled" {...field} />
          )}
        />
      </FormControl>
      <Button size="large" variant="contained">
        Login Now
      </Button>
      <Typography variant="caption">
        Are you new? <Link href="/register">Create an account</Link>
      </Typography>
    </Stack>
  );
}
