import React from 'react';
import { Field } from 'formik';
import { FormGroup, Label, } from "reactstrap";

import CustomInput from './CustomInput';

interface InputGroupProps {
    name: string,
    label: string,
    placeholder: string,
    type?: string
}

const FormInput: React.FC<InputGroupProps> = ({ name, label, placeholder, type = 'text' }) => (
    <FormGroup>
        <Label htmlFor={name}>{label}</Label>
        <Field id={name} type={type} name={name} placeholder={placeholder} component={CustomInput} />
    </FormGroup>
)

export default FormInput;