import { MyTransactionsTable } from "../../features/dashboard-my-transactions-page";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboard/my-transactions")({
  component: TransactionsPage,
});

function TransactionsPage(): JSX.Element {
  const navigate = useNavigate();

  return (
    <Stack flex={1} gap={8}>
      <Stack direction="row" gap={2}>
        <IconButton
          size="large"
          sx={{ flexShrink: 0, color: "primary.main" }}
          onClick={() => navigate({ to: "/" })}
        >
          <ArrowLeftIcon width={24} height={24} />
        </IconButton>
        <Box>
          <Typography component="h1" variant="h4" fontWeight={500} mb={0.5}>
            My Transactions
          </Typography>
          <Typography variant="body2">This is all your transaction</Typography>
        </Box>
      </Stack>
      <MyTransactionsTable />
    </Stack>
  );
}
