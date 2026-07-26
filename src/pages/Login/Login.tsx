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


function Login() {
  return (
    <AuthLayout>
      <Stack spacing={3}>

        <Box
  sx={{
    textAlign: "center",
  }}
>
          <Typography variant="h4">
            Enterprise SaaS Dashboard
          </Typography>

          <Typography
    variant="body1"
    color="text.secondary"
    sx={{ mt: 1 }}
>
            Welcome back! Please sign in.
          </Typography>
        </Box>

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
          Sign In
        </Button>

        <Typography
  variant="body2"
  sx={{ textAlign: "center" }}
>
          Don't have an account?{" "}
          <Link
  component={RouterLink}
  to="/register"
>
  Register
</Link>
        </Typography>

      </Stack>
    </AuthLayout>
  );
}

export default Login;