import { useGetUser } from "../../services/auth";
import { getInitial } from "../../utils";
import {
  Box,
  Drawer,
  DrawerProps,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { ExitIcon } from "@radix-ui/react-icons";

interface SidemenuProps extends DrawerProps {
  onLogout: () => void;
}

export function Sidemenu(props: SidemenuProps): JSX.Element {
  const { data: userData } = useGetUser();
  const fullName = userData?.user_metadata.fullName;
  const email = userData?.email;

  return (
    <Drawer
      anchor="right"
      variant="temporary"
      PaperProps={{
        sx: {
          width: {
            xs: "70%",
            sm: "50%",
          },
        },
      }}
      {...props}
    >
      <Stack direction="row" alignItems="center" gap={2} px={2} py={2}>
        <Stack
          justifyContent="center"
          alignItems="center"
          width={80}
          height={80}
          borderRadius="100vh"
          bgcolor="primary.main"
        >
          <Typography color="white">{getInitial(fullName)}</Typography>
        </Stack>
        <Box>
          <Typography variant="body1" fontWeight={600}>
            {fullName}
          </Typography>
          <Typography variant="body2" color="GrayText">
            {email}
          </Typography>
        </Box>
      </Stack>

      <List>
        <ListItem
          sx={{
            "&:hover": {
              color: "primary.main",
            },
            transition: "150ms ease-in",
          }}
        >
          <ListItemButton href="/services">
            <ListItemText>All Services</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem
          sx={{
            "&:hover": {
              color: "primary.main",
            },
            transition: "150ms ease-in",
          }}
        >
          <ListItemButton href="/my-transactions">
            <ListItemText>My Transactions</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            sx={{ gap: 2, color: "red" }}
            onClick={props.onLogout}
          >
            <ExitIcon />
            <ListItemText>Logout</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
