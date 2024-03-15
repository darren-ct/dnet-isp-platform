import { useNavigate, useRouterState } from "@tanstack/react-router";
import { BaseNavigation } from "../../../../components";
import {
  Box,
  IconButton,
  Link,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import { BellIcon, ExitIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { CartIcon } from "../../../../assets/icons";
import { useGetUser, useLogout } from "../../../../services/auth";
import { getInitial } from "../../../../utils";
import Cookies from "js-cookie";
import { useCallback, useState } from "react";
import { useToast } from "../../../../hooks";
import { Sidemenu } from "../../../../components/layout/sidemenu";

export function DashboardNavigation(): JSX.Element {
  const { toast } = useToast();
  const { mutateAsync } = useLogout();
  const navigate = useNavigate();
  const { location } = useRouterState();
  const pathName = location.pathname;

  // Form initial
  const { data: userData } = useGetUser();
  const fullName = userData?.user_metadata.fullName;

  // States
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>();
  const isOpen = !!anchorEl;

  const onLogout = useCallback(async () => {
    await mutateAsync();
    Cookies.remove("token");
    toast("Logout Successful!");
    navigate({ to: "/login" });
  }, [mutateAsync, navigate, toast]);

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
        <Stack
          direction="row"
          alignItems="center"
          gap={5}
          sx={{
            display: {
              xs: "none",
              sm: "flex",
              md: "flex",
              lg: "flex",
              xl: "flex",
            },
          }}
        >
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

        <Stack
          direction="row"
          alignItems="center"
          gap={2}
          sx={{
            display: {
              xs: "none",
              sm: "flex",
              md: "flex",
              lg: "flex",
              xl: "flex",
            },
          }}
        >
          <IconButton>
            <CartIcon width={20} height={20} />
          </IconButton>

          <IconButton>
            <BellIcon width={20} height={20} />
          </IconButton>

          <Stack
            justifyContent="center"
            alignItems="center"
            bgcolor="primary.main"
            borderRadius="100vw"
            width={36}
            height={36}
            sx={{
              cursor: "pointer",
            }}
            onClick={(e) => setAnchorEl(e.currentTarget)}
          >
            <Typography color="white">{getInitial(fullName)}</Typography>
          </Stack>

          <Popover
            open={isOpen}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              gap={2}
              px={2}
              py={1}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  bgcolor: "rgba(0,0,0,.05)",
                },
                transition: "150ms ease-in",
              }}
              onClick={onLogout}
            >
              <ExitIcon color="red" />
              <Typography variant="body2" color="red">
                Logout
              </Typography>
            </Stack>
          </Popover>
        </Stack>

        <IconButton
          sx={{
            display: {
              xs: "block",
              sm: "none",
              md: "none",
              lg: "none",
              xl: "none",
            },
          }}
          onClick={() => setIsDrawerOpen(true)}
        >
          <HamburgerMenuIcon width={20} height={20} />
        </IconButton>

        <Sidemenu
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          onLogout={onLogout}
        />
      </BaseNavigation>
    </Box>
  );
}
