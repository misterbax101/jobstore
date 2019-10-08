import React, { Fragment } from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SignUp, Home } from './components';

const App: React.FC = () => {
    return (
        <Container>
            <BrowserRouter>
                <Fragment>
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/sign-up' exact component={SignUp} />
                    </Switch>
                </Fragment>
            </BrowserRouter>
        </Container>
    );
}

export default App;