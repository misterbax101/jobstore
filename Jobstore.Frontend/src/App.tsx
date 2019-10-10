import React from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { SignUp, Home } from './components/pages';
import { Login  } from './containers/pages';
import { Header } from './components/layout';
import setAuthToken from './untils/setAuthToken';

setAuthToken(localStorage.getItem('jwtToken'));

const App: React.FC = () => {
    return (
        <Container>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/login' exact component={Login} />
                    <Route path='/sign-up' exact component={SignUp} />
                </Switch>
            </BrowserRouter>
        </Container>
    );
}

export default App;