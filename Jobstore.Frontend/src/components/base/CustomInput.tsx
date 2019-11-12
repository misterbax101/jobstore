import React from 'react';
import { FieldProps, ErrorMessage, FormikTouched, FormikErrors } from 'formik';
import { Input } from 'reactstrap';

const CustomInput = <T extends {}>({ field, form: { touched, errors }, ...props }: FieldProps<T>) => {
    const touchedKey = field.name as keyof FormikTouched<T>;
    const errorsKey = field.name as keyof FormikErrors<T>;
    return (
        <React.Fragment>
            <Input
                invalid={!!touched[touchedKey] && !!errors[errorsKey]}
                {...field}
                {...props}
            />
            <ErrorMessage name={field.name} component="div" className="invalid-feedback" />
        </React.Fragment>);
}

export default CustomInput;