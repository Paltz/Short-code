import React from "react";
import { SubmitButtonProps } from "../..";
import { Button } from "@mui/material";

export default function SubmitButton({
    onClick,
    children,
    sx
}: SubmitButtonProps ){
    return (
        <Button
            onClick={onClick}
            sx={{
                ...sx
            }}
        >
            { children }
        </Button>
    )
}
