import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import type { JSX } from "react";

export default function PrivateLayout(): JSX.Element {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        navigate("/", { replace: true });
    };

    return (
        <Box sx={{ minHeight: "100vh" }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Dashboard
                    </Typography>

                    <Typography variant="body2" sx={{ mx: 2 }}>
                        {user?.email || user?.username || ""}
                    </Typography>

                    <Button color="inherit" onClick={onLogout}>
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>

            <Container sx={{ py: 3 }}>
                <Outlet />
            </Container>
        </Box>
    );
}
