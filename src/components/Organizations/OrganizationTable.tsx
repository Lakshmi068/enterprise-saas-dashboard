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
} 
from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface Organization {
  id: number;
  name: string;
  users: number;
  plan: string;
  status: string;
}
interface OrganizationTableProps {
  organizations: Organization[];
  search: string;
  onEdit: (organization: Organization) => void;
}
function OrganizationTable({
  organizations,
  search,
  onEdit,
}: OrganizationTableProps) {
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
                <IconButton
  color="primary"
  onClick={() => onEdit(organization)}
>
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