import React from 'react';
import { Formik, FormikProps, Form, Field, FormikActions } from 'formik';
import { FormGroup, Button, Container, Col, Label, Spinner, Alert } from 'reactstrap';
import { RouteComponentProps, Link } from 'react-router-dom';

import { LoginModel } from '../../../types';
import FormInput from '../../base/FormInput';
import CustomInput from '../../base/CustomInput';
import { loginValidationSchema } from './loginValidationSchema'
import resources from '../../../translations';
import { routes } from '../../../constants';
const { fields, placholders } = resources.common;

interface LoginProps extends RouteComponentProps {
    onLogin(model: LoginModel): Promise<boolean>;
    error: string | null,
    loading: boolean,
    isAuthenticated: boolean
}

class Login extends React.Component<LoginProps, {}>{
    constructor(props: LoginProps) {
        super(props);
        if (props.isAuthenticated) {
            this.redirect();;
        }
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
            <Container>
                <Form>
                    <Col>
                        <FormInput name="email" type="email" label={fields.email} placeholder={placholders.emailPlacholder} />
                    </Col>
                    <Col>
                        <FormInput name="password" type="password" label={fields.password} placeholder={placholders.passwordPlacholder} />
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
                                disabled={loading}>
                                {resources.common.buttonLabels.submit}
                            </Button>
                            {loading && <Spinner type="grow" color="secondary" style={{ verticalAlign: 'middle' }} />}
                            <Link to={routes.signUp} className="btn btn-link">{resources.login.register}</Link>
                        </FormGroup>
                    </Col>
                </Form>
            </Container>
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
                <Col md={{ size: 8, offset: 2 }}>
                    <h2>Login</h2>
                    {this.props.error && <Alert color='danger'>{this.props.error}</Alert>}
                    <Formik
                        initialValues={{ email: 'test@gmail.com', password: 'Aa!123456', remeberMe: false }}
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