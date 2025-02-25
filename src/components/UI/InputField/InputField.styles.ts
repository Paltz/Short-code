import { styled } from "@mui/system";
import { TextField } from "@mui/material";

export const Input = styled(TextField)(({ theme }) => ({
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#D1D5DB",
        },
        "&:hover fieldset": {
          borderColor: "#D1D5DB",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#D1D5DB",
        },
        borderRadius: "13px"
    }
}));

export const inputPropsStyle = {
    fontSize: "16px", 
    fontWeight: "400", 
    color: "rgba(17, 24, 39, 0.5)", 
}

export const inputStyles = {
    width: "100%",
    marginTop: 1
}