import * as Yup from 'yup';

import resources from '../../../translations';

const { fields, validationErrors } = resources.common;

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