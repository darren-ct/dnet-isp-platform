import { BaseNavigation } from "../../../../components";
import { Box, Link, Stack, Typography } from "@mui/material";

export function DashboardNavigation(): JSX.Element {
  return (
    <Box borderBottom="1px solid rgba(0, 0, 0, .1)">
      <BaseNavigation>
        <Stack direction="row" alignItems="center" gap={5}>
          <Link
            href="/products"
            fontFamily="sans-serif"
            sx={{
              cursor: "pointer",
              textDecorationLine: "none",
              color: "black",
              "&:hover": {
                color: "primary.main",
              },
              transition: "150ms",
            }}
          >
            All Products
          </Link>

          <Link
            href="/my-transactions"
            fontFamily="sans-serif"
            sx={{
              cursor: "pointer",
              textDecorationLine: "none",
              color: "black",
              "&:hover": {
                color: "primary.main",
              },
              transition: "150ms",
            }}
          >
            My Transactions
          </Link>

          <Typography
            bgcolor="primary.main"
            color="white"
            p={1}
            borderRadius="100vw"
            sx={{
              cursor: "pointer",
            }}
          >
            DC
          </Typography>
        </Stack>
      </BaseNavigation>
    </Box>
  );
}
