import { Box, Container, Paper } from "@mui/material";
import type { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={4}
          sx={{
            padding: 4,
            borderRadius: 3,
          }}
        >
          {children}
        </Paper>
      </Container>
    </Box>
  );
}

export default AuthLayout;