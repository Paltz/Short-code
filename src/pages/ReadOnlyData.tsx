import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { clearAuthData } from "../store/authSlice";
import { SubmitButton } from "../components";
import { Container, Box, Typography, Paper } from "@mui/material";
import axios from "axios";

const buttonContainer = {
    border: "1px solid #BA68C8",
    width: "100%",
    padding: "8px",
    marginTop: 1.5,
    marginBottom: 1,
    borderRadius: "50px",
    color: "#fff",
    fontSize: "15px",
    fontWeight: 800
}

export default function ReadOnlyData () {
    const dispatch = useDispatch();
    const authData = useSelector((state: RootState) => state.auth);

    const handleDelete = () => {
        dispatch(clearAuthData());
    };

    const handleSend = async () => {
        try {
            await axios.post("http://localhost:5000/api/send", authData);
            alert("Data sent successfully!");
        } catch (error) {
            console.error("Error sending data:", error);
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography style={{
                fontSize: '34px',
                fontWeight: 700,
                textAlign: 'center'
            }}>
                Read Only Data
            </Typography>
            <Paper elevation={3} sx={{ padding: 3 }}>
                <Typography style={{ fontSize: '20px' }}><span style={{ fontWeight: 700 }}>First Name:</span> {authData.fname}</Typography>
                <Typography style={{ fontSize: '20px' }}><span style={{ fontWeight: 700 }}>Middle Name:</span> {authData.mname}</Typography>
                <Typography style={{ fontSize: '20px' }}><span style={{ fontWeight: 700 }}>Last Name:</span> {authData.lname}</Typography>
                <Typography style={{ fontSize: '20px' }}><span style={{ fontWeight: 700 }}>Leader:</span> {authData.leader ? "True" : "False"}</Typography>
            </Paper>

            <Box display="flex" justifyContent="space-between" mt={3}>
                <SubmitButton
                    sx={{ 
                        ...buttonContainer,
                        background: "linear-gradient(120deg, rgb(235, 72, 72) 0%, rgb(138, 30, 30) 100%)"
                    }}
                    onClick={handleDelete}
                >
                    Delete
                </SubmitButton>
                
                <SubmitButton
                    sx={{ 
                        ...buttonContainer,
                        background: "linear-gradient(120deg, rgb(72, 129, 235) 0%, rgb(30, 58, 138) 100%)",
                    }}
                    onClick={handleSend}
                >
                    Send
                </SubmitButton>
            </Box>
        </Container>
    );
};
