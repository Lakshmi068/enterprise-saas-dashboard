import { Typography, Grid } from "@mui/material";

import PeopleIcon from "@mui/icons-material/People";
import BusinessIcon from "@mui/icons-material/Business";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

import DashboardLayout from "../../layouts/DashboardLayout";
import StatCard from "../../components/Dashboard/StatCard";

function Dashboard() {
  return (
    <DashboardLayout>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Welcome Back!
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard
            title="Users"
            value="1,248"
            icon={<PeopleIcon fontSize="large" />}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard
            title="Organizations"
            value="24"
            icon={<BusinessIcon fontSize="large" />}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard
            title="Subscriptions"
            value="19"
            icon={<CreditCardIcon fontSize="large" />}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard
            title="Revenue"
            value="$12,450"
            icon={<AttachMoneyIcon fontSize="large" />}
          />
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}

export default Dashboard;