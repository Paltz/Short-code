import React from "react";
import { AppBar, Toolbar, Box, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import DisplayData from "./pages/DisplayData";
import EditData from "./pages/EditData";
import ReadOnlyData from "./pages/ReadOnlyData";

const AppRoutes = () => {
    return useRoutes([
        { path: "/", element: <DisplayData /> },
        { path: "/edit", element: <EditData /> },
        { path: "/readonly", element: <ReadOnlyData /> },
    ]);
};

export default function App() {
    return (
        <Box>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", gap: 3 }}>
                        <Button color="inherit" component={Link} to="/">Home</Button>
                        <Button color="inherit" component={Link} to="/edit">Edit</Button>
                        <Button color="inherit" component={Link} to="/readonly">Read-Only</Button>
                    </Box>
                </Toolbar>
            </AppBar>

            <Container sx={{ mt: 4 }}>
                <AppRoutes />
            </Container>
        </Box>
    );
}
