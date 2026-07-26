
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import AuthLayout from "../../layouts/AuthLayout";

function Register() {
  return (
    <AuthLayout>
      <Stack spacing={3}>

        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4">
            Create Account
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mt: 1 }}
          >
            Create your Enterprise SaaS account.
          </Typography>
        </Box>

        <TextField
          label="Full Name"
          fullWidth
        />

        <TextField
          label="Email Address"
          fullWidth
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
        />

        <Button
          variant="contained"
          size="large"
          fullWidth
        >
          Register
        </Button>

        <Typography
          variant="body2"
          sx={{ textAlign: "center" }}
        >
          Already have an account?{" "}
          <Link
  component={RouterLink}
  to="/login"
>
  Login
</Link>
        </Typography>

      </Stack>
    </AuthLayout>
  );
}

export default Register;