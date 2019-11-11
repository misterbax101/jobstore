import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { Router, Route, Switch } from 'react-router-dom';

import { Home } from './components/pages';
import { Footer } from './components/layout';
import { Login, SignUp } from './containers/pages';
import { Header } from './containers/layout';
import { history } from './untils/history';
import { authCheckState } from './store/auth/actions';

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

interface AppProps {
    onTryAutoSignup: () => Promise<void>
}

const App: React.FC<AppProps> = ({ onTryAutoSignup }) => {
    React.useEffect(() => {
        onTryAutoSignup();
    })

    return (
        <Router history={history}>
            <Header />
            <Container>
                <Row>
                    <Col md={{ size: 8, offset: 2 }}>
                        <Switch>
                            <Route path='/' exact component={Home} />
                            <Route path='/login' exact component={Login} />
                            <Route path='/sign-up' exact component={SignUp} />
                        </Switch>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </Router>
    );
}

export default connect(null, { onTryAutoSignup: authCheckState })(App);