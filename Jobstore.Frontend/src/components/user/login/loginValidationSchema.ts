import * as Yup from 'yup';

import resources from '../../../translations';

const { fields, validationErrors } = resources.common;

export const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
        .label(fields.email)
        .email(validationErrors.invalidEmail)
        .required(validationErrors.fieldRequired),
    password: Yup.string()
        .label(fields.password)
        .required(validationErrors.fieldRequired),
});
