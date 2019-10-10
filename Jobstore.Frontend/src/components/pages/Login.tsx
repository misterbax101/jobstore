import React from 'react';
import { Formik, FormikProps, Form, Field, FormikActions } from 'formik';
import { FormGroup, Button, Label, Alert } from 'reactstrap';
import * as Yup from 'yup';

import LoginModel from '../../models/LoginModel';
import CustomInput from '../base/CustomInput';

type LoginProps = {
    onLogin(model: LoginModel): Promise<void>,
    errors: string | null,
    isAuthenticated: boolean
}

type LoginState = {
    errors: string | null;

}

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .required('Required')
});


class Login extends React.Component<LoginProps, LoginState>{

    state = {
        errors: null
    };

    renderForm(filedProps: FormikProps<LoginModel>): JSX.Element {
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
                        disabled={filedProps.isSubmitting}>
                        Submit
                </Button>
                </FormGroup>
            </Form>
        );
    }

    onFormSubmit = (values: LoginModel, action: FormikActions<LoginModel>): void => {
        this.props.onLogin(values);
        action.setSubmitting(false);
    }

    componentWillReceiveProps(nextProps: LoginProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    render() {
        console.log(this.props);
        return (
            <React.Fragment>
                {this.state.errors && <Alert color="danger">{this.state.errors}</Alert>}
                <Formik
                    initialValues={{ email: 'test@gmail.com', password: 'Aa!123456', remeberMe: false }}
                    validationSchema={LoginSchema}
                    onSubmit={this.onFormSubmit}
                    render={this.renderForm}
                />
            </React.Fragment>
        );
    }
}


export default Login;