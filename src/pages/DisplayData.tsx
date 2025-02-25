import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Container, Typography, Paper, Box } from "@mui/material";

export default function DisplayData() {
    const data = useSelector((state: RootState) => state.auth);

    return (
        <Container maxWidth="sm">
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                height="84vh"
            >
                <Paper elevation={3} sx={{ padding: 2, textAlign: "center" }}>
                    <Typography variant="h4" gutterBottom>
                        Display Data
                    </Typography>
                    <Box
                        component="pre"
                        sx={{
                            backgroundColor: "#f5f5f5",
                            padding: 2,
                            borderRadius: 2,
                            textAlign: "left",
                            whiteSpace: "pre-wrap",
                            fontSize: "20px"
                        }}
                    >
                        {JSON.stringify(data, null, 2)}
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
};
