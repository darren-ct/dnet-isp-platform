import { useRouterState } from "@tanstack/react-router";
import { BaseNavigation } from "../../../../components";
import { Box, IconButton, Link, Stack, Typography } from "@mui/material";
import { BellIcon } from "@radix-ui/react-icons";
import { CartIcon } from "../../../../assets/icons";

export function DashboardNavigation(): JSX.Element {
  const { location } = useRouterState();
  const pathName = location.pathname;

  return (
    <Box
      zIndex={100}
      position="fixed"
      top={0}
      left={0}
      width="100vw"
      bgcolor="white"
      borderBottom="1px solid rgba(0, 0, 0, .1)"
      boxShadow="0px 2px 6px rgba(0, 0, 0, .05)"
    >
      <BaseNavigation>
        <Stack direction="row" alignItems="center" gap={5}>
          <Link
            href="/services"
            fontFamily="sans-serif"
            sx={{
              cursor: "pointer",
              textDecorationLine: "none",
              color: pathName.includes("services") ? "primary.main" : "black",
              "&:hover": {
                color: "primary.main",
              },
              transition: "150ms",
            }}
          >
            All Services
          </Link>
          <Link
            href="/my-transactions"
            fontFamily="sans-serif"
            sx={{
              cursor: "pointer",
              textDecorationLine: "none",
              color: pathName.includes("my-transactions")
                ? "primary.main"
                : "black",
              "&:hover": {
                color: "primary.main",
              },
              transition: "150ms",
            }}
          >
            My Transactions
          </Link>
        </Stack>

        <Stack direction="row" alignItems="center" gap={2}>
          <IconButton sx={{ color: "primary.main" }}>
            <CartIcon width={20} height={20} />
          </IconButton>

          <IconButton>
            <BellIcon color="#1976d2" width={20} height={20} />
          </IconButton>

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
