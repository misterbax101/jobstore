import React from 'react';
import { Formik, FormikProps, Form, Field, FormikActions } from 'formik';
import { FormGroup, Button, Col, Label, Spinner, Alert } from 'reactstrap';
import { RouteComponentProps, Link } from 'react-router-dom';

import { LoginModel } from '../../../types';
import FormInput from '../../base/FormInput';
import CustomInput from '../../base/CustomInput';
import ButtonSpinner from '../../base/ButtonSpinner';
import { loginValidationSchema } from './loginValidationSchema'
import resources from '../../../translations';
import { routes, layout } from '../../../constants';
const { fields, placholders } = resources.common;

interface LoginProps extends RouteComponentProps {
    onLogin(model: LoginModel): Promise<boolean>;
    resetForm: () => void;
    error?: string,
    loading: boolean,
    isAuthenticated: boolean
}

const initialValues = {
    email: '',
    password: '',
    remeberMe: false
};

class Login extends React.Component<LoginProps, {}>{
    constructor(props: LoginProps) {
        super(props);
        if (props.isAuthenticated) {
            this.redirect();;
        }
    }
    componentDidMount() {
        this.props.resetForm();
    }
    redirect = () => {
        const { history, location } = this.props;
        const redirectUrl = location.state && location.state.from
            ? location.state.from :
            routes.home;
        history.push(redirectUrl);
    }

    renderForm = (filedProps: FormikProps<LoginModel>): JSX.Element => {
        const { loading } = this.props;
        return (
            <Form>
                <FormInput name="email" type="email" label={fields.email} placeholder={placholders.emailPlacholder} />
                <FormInput name="password" type="password" label={fields.password} placeholder={placholders.passwordPlacholder} />
                <FormGroup check>
                    <Label check>
                        <Field type="checkbox" name="remeberMe" component={CustomInput} />
                        {resources.login.remeberMe}</Label>
                </FormGroup>
                <FormGroup>
                    <Button
                        color="primary"
                        type="submit"
                        disabled={loading}>
                        {resources.common.buttonLabels.submit}
                    </Button>
                    <ButtonSpinner loading={loading} /> 
                    <Link to={routes.signUp} className="btn btn-link">{resources.login.register}</Link>
                </FormGroup>
            </Form>
        );
    }

    onFormSubmit = async (values: LoginModel, action: FormikActions<LoginModel>): Promise<void> => {
        const result = await this.props.onLogin(values);
        action.setSubmitting(false);
        if (result) {
            this.redirect();
        }
    }

    render() {
        return (
            <React.Fragment>
                <Col 
                {...layout.loginForm} 
                className="mt-4" >
                    <h2>Login</h2>
                    {this.props.error && <Alert color='danger'>{this.props.error}</Alert>}
                    <Formik
                        initialValues={initialValues}
                        validationSchema={loginValidationSchema}
                        onSubmit={this.onFormSubmit}
                        render={this.renderForm}
                    />
                </Col>
            </React.Fragment>
        );
    }
}

export default Login;