import { useFindMyTransaction } from "../../../services/my-transactions";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TableContainer,
  Box,
  Stack,
  TextField,
  Select,
  MenuItem,
  Typography,
  IconButton,
  TablePagination,
  Skeleton,
  Chip,
} from "@mui/material";
import { DownloadIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import dayjs from "dayjs";
import { useMemo } from "react";

export function MyTransactionsTable(): JSX.Element {
  const { data: myTransactions, isFetching } = useFindMyTransaction();

  const columns = useMemo(() => {
    return ["Package Name", "Price", "Status", "Created At", "Invoice"];
  }, []);

  return (
    <Box>
      <Stack
        direction="row"
        alignItems="end"
        justifyContent="space-between"
        gap={4}
        mb={4}
      >
        <Stack direction="row" alignItems="stretch" gap={2}>
          <Stack>
            <Typography variant="caption" color="GrayText">
              Status:
            </Typography>
            <Select size="small" defaultValue="All" sx={{ minWidth: 200 }}>
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Expired">Expired</MenuItem>
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Success">Success</MenuItem>
              <MenuItem value="Failed">Failed</MenuItem>
            </Select>
          </Stack>

          <Stack justifyContent="space-between">
            <Typography variant="caption" color="GrayText">
              Updated At:
            </Typography>
            <Stack direction="row" alignItems="center" gap={2}>
              <TextField type="date" variant="standard" size="small" />
              <Typography>-</Typography>
              <TextField type="date" variant="standard" size="small" />
            </Stack>
          </Stack>
        </Stack>

        <TextField
          size="small"
          placeholder="Search package name..."
          sx={{ flex: 1, maxWidth: "320px" }}
        />
      </Stack>

      {isFetching && <Skeleton variant="rectangular" height={400} />}

      {!isFetching && (
        <TableContainer component={Paper} sx={{ maxHeight: 600 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {columns.map((item, index) => (
                  <TableCell key={index}>{item}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {myTransactions.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.packageName}</TableCell>
                  <TableCell>Rp {item.price.toLocaleString()},-</TableCell>
                  <TableCell>
                    <Chip
                      label={item.status}
                      color="warning"
                      sx={{
                        fontSize: 10,
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    {dayjs(item.createdAt).format("dddd, D MMM YYYY")}
                  </TableCell>
                  <TableCell>
                    <IconButton color="primary">
                      <DownloadIcon width={20} height={20} />
                    </IconButton>
                    <IconButton color="primary">
                      <EyeOpenIcon width={20} height={20} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={50}
        rowsPerPage={10}
        page={0}
        onPageChange={() => {}}
      />
    </Box>
  );
}
