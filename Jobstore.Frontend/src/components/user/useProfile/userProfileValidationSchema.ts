import * as Yup from 'yup';

import resouces from '../../../translations';

const { validationErrors } = resouces.common;
const { fields } = resouces.addVacancy;

export const userProfileValidationSchema = Yup.object({
    title: Yup.string()
        .label(fields.title.label)
        .max(50)
        .required(validationErrors.fieldRequired),
    companyName: Yup.string()
        .label(fields.companyName.label)
        .max(50)
        .required(validationErrors.fieldRequired),
    description: Yup.string()
        .label(fields.description.label)
        .max(500)
        .required(validationErrors.fieldRequired),
    typeId: Yup.string()
        .label(fields.type.label)
        .required(validationErrors.fieldRequired),
    salaryValue: Yup.number()
        .label(fields.salary.label)
        .max(1000000)
        .required(validationErrors.fieldRequired)
});


export default userProfileValidationSchema;