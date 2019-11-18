import * as Yup from 'yup';

import resources from '../../translations';

const { fields, validationErrors } = resources.common;

export const signUpValidationSchema = Yup.object({
    email: Yup.string()
        .label(fields.email)
        .email(validationErrors.invalidEmail)
        .required(validationErrors.fieldRequired),
    password: Yup.string()
        .label(fields.password)
        .min(6)
        .matches(/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/, validationErrors.passwordNotMuchRules)
        .required(validationErrors.fieldRequired),
    confirmPassword: Yup.string()
        .label(fields.passwordConfirm)
        .oneOf([Yup.ref('password'), null])
        .required(validationErrors.fieldRequired),
    firstName: Yup.string()
        .label(fields.firstName)
        .required(validationErrors.fieldRequired)
        .max(30),
    lastName: Yup.string()
        .label(fields.lastName)
        .required(validationErrors.fieldRequired)
        .max(30)
});