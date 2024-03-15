import { Stack, Typography } from "@mui/material";

export function HomeBanner(): JSX.Element {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      width="100%"
      height={360}
      bgcolor="rgba(0,0,0,.1)"
    >
      <Typography fontWeight={600}>Banner</Typography>
    </Stack>
  );
}
