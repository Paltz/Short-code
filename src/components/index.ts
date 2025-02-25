import { SxProps } from "@mui/material";

export { default as SubmitButton } from "./UI/Button/Button";

export interface SubmitButtonProps {
    onClick?: React.MouseEventHandler;
    children?: React.ReactNode;
    sx?: SxProps;
}

export { default as CheckBox } from "./UI/CheckBox/CheckBox";

export interface CheckBoxProps {
    name: string;
    control: any;
    label?: string;
    key?: number;
    style?: Object;
    onChange?: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
}

export { default as InputField } from "./UI/InputField/InputField";

export interface InputFieldProps {
    name?: string;
    control?: any;
    required?: boolean;
    errorFieldLabel?: string;
    label?: string;
    placeholder?: string;
    type?: string;
    onChange?: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    validationRules?: Object;
    disabled?: boolean;
    onKeyDown?: React.KeyboardEventHandler;
}