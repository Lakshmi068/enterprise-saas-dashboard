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
import AddOrganizationDialog from "../../components/Organizations/AddOrganizationDialog";
function Organizations() {
  const [search, setSearch] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedOrganization, setSelectedOrganization] = useState<any>(null);

  const [organizations, setOrganizations] = useState([
    {
      id: 1,
      name: "OpenAI",
      users: 250,
      plan: "Enterprise",
      status: "Active",
    },
    {
      id: 2,
      name: "Microsoft",
      users: 1200,
      plan: "Premium",
      status: "Active",
    },
    {
      id: 3,
      name: "Amazon",
      users: 3500,
      plan: "Enterprise",
      status: "Active",
    },
  ]);

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
  onClick={() => setOpenDialog(true)}
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

      <OrganizationTable
  organizations={organizations}
  search={search}
  onEdit={(organization) => {
    setSelectedOrganization(organization);
    setOpenDialog(true);
  }}
/>
      <AddOrganizationDialog
  open={openDialog}
  onClose={() => setOpenDialog(false)}
  onSave={(newOrganization) => {
    setOrganizations((previousOrganizations) => [
      ...previousOrganizations,
      newOrganization,
    ]);

    setOpenDialog(false);
  }}
/>
    </DashboardLayout>
  );
}

export default Organizations;