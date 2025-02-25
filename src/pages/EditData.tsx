import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputField, SubmitButton, CheckBox } from "../components";
import { RootState } from "../store/store";
import { useForm } from "react-hook-form";
import { setAuthData } from "../store/authSlice";
import { Container, Box, Typography } from "@mui/material";

const buttonContainer = {
    border: "1px solid #BA68C8",
    width: "100%",
    padding: "8px",
    marginTop: 1.5,
    marginBottom: 1,
    borderRadius: "50px",
    background: "linear-gradient(120deg, rgb(72, 129, 235) 0%, rgb(30, 58, 138) 100%)",
    color: "#fff",
    fontSize: "15px",
    fontWeight: 800
}

export default function EditData () {
    const dispatch = useDispatch();
    const authData = useSelector((state: RootState) => state.auth);

    const {
        control,
        handleSubmit
    } = useForm({
        defaultValues: {
            fname: authData.fname,
            mname: authData.mname,
            lname: authData.lname,
            leader: authData.leader
        }
    });

    const handleSubmitButton = (data: any) => {
        dispatch(setAuthData({
            fname: data.fname,
            mname: data.mname,
            lname: data.lname,
            leader: data.leader
        }))
    };

    return (
        <Container maxWidth="sm">
            <Typography style={{
                fontSize: '34px',
                fontWeight: 700
            }}>
                Edit Data
            </Typography>
            <Box display="flex" flexDirection="column" gap={2}>
                <InputField
                    name={'fname'}
                    control={control}
                    type={'text'}
                    placeholder={'Enter your First Name'}
                    errorFieldLabel={'First Name'}
                    // required
                />

                <InputField
                    name={'mname'}
                    control={control}
                    type={'text'}
                    placeholder={'Enter your Middle Name'}
                    errorFieldLabel={'First Name'}
                    // required
                />

                <InputField
                    name={'lname'}
                    control={control}
                    type={'text'}
                    placeholder={'Enter your Last Name'}
                    errorFieldLabel={'First Name'}
                    // required
                />

                <CheckBox
                    name={'leader'}
                    label={"Leader"}
                    control={control}
                />

                <SubmitButton
                    sx={{ ...buttonContainer }}
                    onClick={handleSubmit((data) => { handleSubmitButton(data); })}
                >
                    Save
                </SubmitButton>
            </Box>
        </Container>
    );
};

