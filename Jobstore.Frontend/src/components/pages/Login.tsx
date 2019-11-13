import React from 'react';
import { Formik, FormikProps, Form, Field, FormikActions } from 'formik';
import { FormGroup, Button, Label, Spinner, Alert } from 'reactstrap';
import { RouteComponentProps, Link } from 'react-router-dom';
import * as Yup from 'yup';

import { LoginModel } from '../../models';
import CustomInput from '../base/CustomInput';

interface LoginProps extends RouteComponentProps {
    onLogin(model: LoginModel): Promise<void>;
    error: string | null,
    loading: boolean,
    isAuthenticated: boolean
}

const loginModelSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .required('Required')
});


class Login extends React.Component<LoginProps, {}>{
    constructor(props: LoginProps) {
        super(props);
        if (props.isAuthenticated) {
            props.history.push('/');
        }
    }

    renderForm = (filedProps: FormikProps<LoginModel>): JSX.Element => {
        return (
            <Form>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Field type="email" name="email" placeholder="Enter email" component={CustomInput} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Field type="password" name="password" placeholder="Enter password" component={CustomInput} />
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Field type="checkbox" name="remeberMe" component={CustomInput} />
                        Remeber me</Label>
                </FormGroup>
                <FormGroup>
                    <Button
                        color="primary"
                        type="submit"
                        disabled={this.props.loading}>
                        Submit
                </Button>
                    {this.props.loading && <Spinner type="grow" color="secondary" style={{ verticalAlign: 'middle' }} />}
                    <Link to={'/sign-up'} className={'btn btn-link'}>Register</Link>
                </FormGroup>
            </Form>
        );
    }

    onFormSubmit = async (values: LoginModel, action: FormikActions<LoginModel>): Promise<void> => {
        await this.props.onLogin(values);
        action.setSubmitting(false);
    }

    render() {
        return (
            <React.Fragment>
                {this.props.error && <Alert color='danger'>{this.props.error}</Alert>}
                <Formik
                    initialValues={{ email: 'test@gmail.com', password: 'Aa!123456', remeberMe: false }}
                    validationSchema={loginModelSchema}
                    onSubmit={this.onFormSubmit}
                    render={this.renderForm}
                />
            </React.Fragment>
        );
    }
}

export default Login;