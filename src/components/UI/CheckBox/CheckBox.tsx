import React from 'react'
import { Controller } from 'react-hook-form';
import { FormControlLabel, Checkbox } from '@mui/material'
import { CheckBoxProps } from '../..';

export default function CheckBox({
    name="",
    control,
    label,
    key,
    style,
    onChange
}: CheckBoxProps) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => 
                <FormControlLabel
                    label={<span style={{ fontWeight: 400 }}>{label}</span>}
                    value={field.value}
                    control={
                        <Checkbox
                            key={key}
                            style={style}
                            inputRef={field.ref}
                            name={field.name}
                            checked={!!field.value} 
                            onChange={(e) => { field.onChange(e); if (onChange) { onChange(e) } }}
                            size="small"
                            className={'Checkbox'}
                        />
                    }
                />
            }
        />
    )
}