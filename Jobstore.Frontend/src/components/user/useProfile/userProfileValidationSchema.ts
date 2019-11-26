import * as Yup from 'yup';

import resouces from '../../../translations';

const { validationErrors, fields } = resouces.common;

export const userProfileValidationSchema = Yup.object({
    firstName: Yup.string()
        .label(fields.firstName)
        .required(validationErrors.fieldRequired)
        .max(30),
    lastName: Yup.string()
        .label(fields.lastName)
        .required(validationErrors.fieldRequired)
        .max(30)
});


export default userProfileValidationSchema;