import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import { Router, Route, Switch } from 'react-router-dom';

import { SignUp, Home } from './components/pages';
import { Login } from './containers/pages';
import { Header } from './components/layout';
import { history } from './untils/history';
import { authCheckState } from './store/auth/actions';
import setAuthToken from './untils/setAuthToken';

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
setAuthToken(localStorage.getItem('jwtToken'));

const App: React.FC = () => {
    return (
        <Container> 
                <Router history={history}>
                    <Header />
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/login' exact component={Login} />
                        <Route path='/sign-up' exact component={SignUp} />
                    </Switch>
                </Router>
        </Container>
    );
}

export default connect(null,
    dispach => {
        authCheckState()(dispach); return {};
    })(App);