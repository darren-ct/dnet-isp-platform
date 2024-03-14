import { openWhatsapp } from "../../../utils";
import { Box } from "@mui/material";
import { ChatBubbleIcon } from "@radix-ui/react-icons";

export function CustomerServiceButton(): JSX.Element {
  return (
    <Box
      position="fixed"
      bottom={24}
      right={24}
      px={4}
      py={3.5}
      pb={3}
      bgcolor="primary.main"
      border="2px solid white"
      borderRadius="100vh"
      boxShadow="0px 0px 15px rgba(0,0,0,.25)"
      sx={{
        cursor: "pointer",
        transition: "150ms",
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
      onClick={() =>
        openWhatsapp(
          "Permisi Kak, saya ingin bertanya mengenai servis D-Net yang tersedia..."
        )
      }
    >
      <ChatBubbleIcon color="white" width={24} height={24} />
    </Box>
  );
}
