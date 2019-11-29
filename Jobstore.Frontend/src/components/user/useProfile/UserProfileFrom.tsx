import React from 'react';
import { Formik, FormikProps, Form, Field } from 'formik';
import { Col, FormGroup, Label, Button } from 'reactstrap';

import { UserModel } from './../../../types';
import validationSchema from './userProfileValidationSchema';
import CustomInput from '../../base/CustomInput';
import resouces from './../../../translations';

interface UserProfileFromProps {
    initialValues: UserModel,
    onSubmit: (values: UserModel) => void
}

const UserProfileFrom: React.FC<UserProfileFromProps> = ({ initialValues, onSubmit }) => {

    const renderForm = ({ values, handleBlur, handleChange }: FormikProps<UserModel>): JSX.Element => {

        const { fields: fieldResources, placholders } = resouces.common;

        return (
            <Form>
                <FormGroup>
                    <Label htmlFor="email">{fieldResources.email}</Label>
                    <Field type="email" name="email" disabled={true} placeholder={placholders.emailPlacholder} component={CustomInput} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="firstName">{fieldResources.firstName}</Label>
                    <Field name="firstName" placeholder={placholders.lastNamePlacholder} component={CustomInput} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="lastName">{fieldResources.lastName}</Label>
                    <Field name="lastName" placeholder={placholders.lastNamePlacholder} component={CustomInput} />
                </FormGroup>
                    <FormGroup>
                        <Button
                            color="primary"
                            type="submit">
                            Submit
                        </Button>
                    </FormGroup>
            </Form>
        );
    }

    const onFormSubmit = (values: UserModel) => {
        onSubmit(values);
    }
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onFormSubmit}
            render={renderForm}
            enableReinitialize={true}
            validationSchema={validationSchema}
        />
    );
}


export default UserProfileFrom;