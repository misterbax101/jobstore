import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';

import {
    user,
    vacancy
} from './containers';
import PrivateRoute from './components/base/PrivateRoute';
import { Layout } from './containers/layout';
import { history } from './untils/history';
import { authCheckState, isAuthenticated } from './store/auth';
import { AppState } from './store';


interface AppProps {
    onTryAutoSignup: () => Promise<void>,
    isAuthenticated: boolean
}

class App extends React.Component<AppProps> {
    componentDidMount() {
        this.props.onTryAutoSignup();
    }

    render() {
        const { isAuthenticated } = this.props;
        return (
            <Router history={history}>
                <Layout>
                    <Switch>
                        <Route exact path='/' component={user.Home} />
                        <Route path='/login' component={user.Login} />
                        <Route path='/sign-up' component={user.SignUp} />
                        <PrivateRoute path='/my-profile' component={user.UserProfile} isAuthenticated={isAuthenticated} />
                        <Route path='/vacancies' component={vacancy.Vacancies} exact />
                        <PrivateRoute path='/vacancies/add' component={vacancy.AddVacancy} isAuthenticated={isAuthenticated} />
                        <PrivateRoute path='/vacancies/edit/:id' component={vacancy.EditVacancy} isAuthenticated={isAuthenticated} />
                        <Route path='/vacancies/:id' component={vacancy.VacancyDetails} />

                    </Switch>
                </Layout>
            </Router>
        );
    }
}

const mapStateToProps = (state: AppState) => ({ isAuthenticated: state.auth.isAuthenticated });

export default connect(mapStateToProps,
    {
        onTryAutoSignup: authCheckState
    })(App);