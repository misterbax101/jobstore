import React from 'react';
import { Formik, FormikProps, Form, Field, FormikActions } from 'formik';
import { FormGroup, Button, Container, Col, Label, Spinner, Alert } from 'reactstrap';
import { RouteComponentProps, Link } from 'react-router-dom';

import { LoginModel } from '../../models';
import CustomInput from '../../components/base/CustomInput';
import { loginValidationSchema } from './loginValidationSchema'
import resources from '../../translations';

const { fields, placholders } = resources.common;

interface LoginProps extends RouteComponentProps {
    onLogin(model: LoginModel): Promise<void>;
    error: string | null,
    loading: boolean,
    isAuthenticated: boolean
}


class Login extends React.Component<LoginProps, {}>{
    constructor(props: LoginProps) {
        super(props);
        if (props.isAuthenticated) {
            props.history.push('/');
        }
    }

    renderForm = (filedProps: FormikProps<LoginModel>): JSX.Element => {
        return (
            <Container>
                <h2>Login</h2>
                <Form>
                    <Col>
                        <FormGroup>
                            <Label htmlFor="email">{fields.email}</Label>
                            <Field type="email" name="email" placeholder={placholders.emailPlacholder} component={CustomInput} />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label htmlFor="password">{fields.password}</Label>
                            <Field type="password" name="password" placeholder={placholders.passwordPlacholder} component={CustomInput} />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup check>
                            <Label check>
                                <Field type="checkbox" name="remeberMe" component={CustomInput} />
                                {resources.login.remeberMe}</Label>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Button
                                color="primary"
                                type="submit"
                                disabled={this.props.loading}>
                                {resources.common.buttonLabels.submit}
                            </Button>
                            {this.props.loading && <Spinner type="grow" color="secondary" style={{ verticalAlign: 'middle' }} />}
                            <Link to={'/sign-up'} className={'btn btn-link'}>{resources.login.register}</Link>
                        </FormGroup>
                    </Col>
                </Form>
            </Container>
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
                    validationSchema={loginValidationSchema}
                    onSubmit={this.onFormSubmit}
                    render={this.renderForm}
                />
            </React.Fragment>
        );
    }
}

export default Login;