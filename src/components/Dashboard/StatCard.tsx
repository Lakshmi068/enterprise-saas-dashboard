import type { ReactNode } from "react";

import {
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

interface StatCardProps {
  title: string;
  value: string;
  icon: ReactNode;
}

function StatCard({
  title,
  value,
  icon,
}: StatCardProps) {
  return (
    <Card elevation={3}>
      <CardContent>
        <Box
  sx={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }}
>
          <Box>
            <Typography
              color="text.secondary"
              variant="body2"
            >
              {title}
            </Typography>

            <Typography
              variant="h5"
              sx={{ mt: 1 }}
            >
              {value}
            </Typography>
          </Box>

          <Box
            sx={{
              fontSize: 40,
              color: "primary.main",
            }}
          >
            {icon}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default StatCard;