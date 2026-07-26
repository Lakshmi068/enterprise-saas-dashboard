import type { ReactNode } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import BusinessIcon from "@mui/icons-material/Business";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";

interface DashboardLayoutProps {
  children: ReactNode;
}

const drawerWidth = 240;

const menuItems = [
  {
    text: "Dashboard",
    path: "/dashboard",
    icon: <DashboardIcon />,
  },
  {
    text: "Organizations",
    path: "/organizations",
    icon: <BusinessIcon />,
  },
  {
    text: "Subscription",
    path: "/subscription",
    icon: <CreditCardIcon />,
  },
  {
    text: "Profile",
    path: "/profile",
    icon: <PersonIcon />,
  },
  {
    text: "Settings",
    path: "/settings",
    icon: <SettingsIcon />,
  },
];

function DashboardLayout({ children }: DashboardLayoutProps) {
  const location = useLocation();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <Typography variant="h6">
            Enterprise SaaS Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />

        <Box sx={{ overflow: "auto" }}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  component={RouterLink}
                  to={item.path}
                  selected={location.pathname === item.path}
                  sx={{
                    "&.Mui-selected": {
                      backgroundColor: "primary.main",
                      color: "white",
                    },
                    "&.Mui-selected .MuiListItemIcon-root": {
                      color: "white",
                    },
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

export default DashboardLayout;