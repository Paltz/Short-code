import React, { useState, useEffect } from "react";
import { Controller, useController } from "react-hook-form";
import { Input, inputPropsStyle, inputStyles } from "./InputField.styles";
import { InputFieldProps } from "../..";

export default function InputField({
    name = "",
    control,
    required,
    errorFieldLabel,
    label,
    placeholder,
    type,
    onChange,
    validationRules,
    disabled,
    onKeyDown
}: InputFieldProps) {

    const [extensionRules, setExtensionRules] = useState({});
    const { fieldState } = useController({ name: name, control: control, defaultValue: '' });
    const [errorMessage, setErrorMessage] = useState<String | undefined>('');
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        let newRules: { email?: string | Object } = {};
        if (validationRules) { 
            newRules = { ...newRules, ...validationRules }; 
        }
        setExtensionRules({ ...newRules })
    }, []);

    useEffect(() => {
        setErrorMessage(fieldState.error ? fieldState.error.message : '');
    }, [fieldState.error]);

    const onDrop = (e: any) => {
        e.preventDefault();
    }

    return (
        <Controller
            name={name}
            control={control}
            rules={{
                required: (required) ? `${errorFieldLabel ? errorFieldLabel : label} is required` : false,
                validate: { ...extensionRules }
            }}
            render={({ field, fieldState, formState }) => 
                <Input
                    name={field.name}
                    placeholder={placeholder}
                    label={label}
                    value={field.value}
                    type={type === "password" ? showPassword ? "text" : "password" : type}
                    onChange={(e) => {
                        field.onChange(e);
                        if(onChange) {
                            onChange(e);
                        }
                    }}
                    onKeyDown={onKeyDown}
                    onDrop={onDrop}
                    error={errorMessage === '' || errorMessage === undefined || errorMessage === null ? false : true}
                    helperText={errorMessage}
                    disabled={disabled}
                    sx={{
                        ...inputStyles
                    }}
                    InputLabelProps={{ style: { ...inputPropsStyle } }}
                />
            }
        />
    )
}