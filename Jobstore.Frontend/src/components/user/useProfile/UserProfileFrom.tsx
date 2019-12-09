import React from 'react';
import { Formik, FormikProps, Form, Field, FormikActions } from 'formik';
import { FormGroup, Label, Button } from 'reactstrap';

import { UserModel } from './../../../types';
import validationSchema from './userProfileValidationSchema';
import CustomInput from '../../base/CustomInput';
import resouces from './../../../translations';
import ButtonSpinner from '../../base/ButtonSpinner';
import { async } from 'q';

interface UserProfileFromProps {
    initialValues: UserModel,
    onSubmit: (values: UserModel) => Promise<void>
}

const UserProfileFrom: React.FC<UserProfileFromProps> = ({ initialValues, onSubmit }) => {

    const renderForm = (filedProps: FormikProps<UserModel>): JSX.Element => {

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
                    <ButtonSpinner loading={filedProps.isSubmitting} />
                </FormGroup>
            </Form>
        );
    }

    const onFormSubmit = async (values: UserModel, actions: FormikActions<UserModel>): Promise<void> => {
        await onSubmit(values);
        actions.setSubmitting(false);
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