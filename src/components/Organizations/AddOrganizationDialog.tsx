import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  TextField,
} from "@mui/material";

interface Organization {
  id: number;
  name: string;
  users: number;
  plan: string;
  status: string;
}

interface AddOrganizationDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (organization: Organization) => void;
}

function AddOrganizationDialog({
  open,
  onClose,
  onSave,
}: AddOrganizationDialogProps) {
  const [name, setName] = useState("");
  const [users, setUsers] = useState("");
  const [plan, setPlan] = useState("Enterprise");
  const [status, setStatus] = useState("Active");

  const handleSave = () => {
    console.log("Save button clicked");
    if (name.trim() === "" || users.trim() === "") {
      return;
    }

    onSave({
      id: Date.now(),
      name,
      users: Number(users),
      plan,
      status,
    });

    setName("");
    setUsers("");
    setPlan("Enterprise");
    setStatus("Active");

    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Add Organization</DialogTitle>

      <DialogContent>
        <TextField
          margin="normal"
          fullWidth
          label="Organization Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <TextField
          margin="normal"
          fullWidth
          label="Number of Users"
          type="number"
          value={users}
          onChange={(event) => setUsers(event.target.value)}
        />

        <TextField
          margin="normal"
          fullWidth
          select
          label="Subscription Plan"
          value={plan}
          onChange={(event) => setPlan(event.target.value)}
        >
          <MenuItem value="Enterprise">Enterprise</MenuItem>
          <MenuItem value="Premium">Premium</MenuItem>
          <MenuItem value="Basic">Basic</MenuItem>
        </TextField>

        <TextField
          margin="normal"
          fullWidth
          select
          label="Status"
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        >
          <MenuItem value="Active">Active</MenuItem>
          <MenuItem value="Inactive">Inactive</MenuItem>
        </TextField>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>
          Cancel
        </Button>

        <Button variant="contained" onClick={handleSave}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddOrganizationDialog;