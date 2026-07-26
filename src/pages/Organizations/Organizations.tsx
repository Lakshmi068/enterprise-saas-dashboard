import { useState } from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import DashboardLayout from "../../layouts/DashboardLayout";
import OrganizationTable from "../../components/Organizations/OrganizationTable";

function Organizations() {
  const [search, setSearch] = useState("");
  return (
    <DashboardLayout>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Box>
          <Typography variant="h4">
            Organizations
          </Typography>

          <Typography
            color="text.secondary"
            sx={{ mt: 1 }}
          >
            Manage all organizations in one place.
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
        >
          Add Organization
        </Button>
      </Stack>

      <TextField
  fullWidth
  label="Search Organizations"
  placeholder="Search by organization name..."
  value={search}
  onChange={(event) => setSearch(event.target.value)}
/>

      <OrganizationTable search={search} />
    </DashboardLayout>
  );
}

export default Organizations;