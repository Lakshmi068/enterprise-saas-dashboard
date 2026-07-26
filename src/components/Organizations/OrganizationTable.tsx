import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface OrganizationTableProps {
  search: string;
}

const organizations = [
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
];

function OrganizationTable({ search }: OrganizationTableProps) {
  const filteredOrganizations = organizations.filter((organization) =>
    organization.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Organization</strong>
            </TableCell>
            <TableCell>
              <strong>Users</strong>
            </TableCell>
            <TableCell>
              <strong>Plan</strong>
            </TableCell>
            <TableCell>
              <strong>Status</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Actions</strong>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {filteredOrganizations.map((organization) => (
            <TableRow key={organization.id}>
              <TableCell>{organization.name}</TableCell>
              <TableCell>{organization.users}</TableCell>
              <TableCell>{organization.plan}</TableCell>

              <TableCell>
                <Chip
                  label={organization.status}
                  color="success"
                  size="small"
                />
              </TableCell>

              <TableCell align="center">
                <IconButton color="primary">
                  <EditIcon />
                </IconButton>

                <IconButton color="error">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OrganizationTable;