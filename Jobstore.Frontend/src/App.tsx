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
    constructor(props: AppProps) {
        super(props);
        this.props.onTryAutoSignup();
    }
 componentDidMount() {
       //this.props.onTryAutoSignup();
    }

    render() {
        const { isAuthenticated } = this.props;
        return (
            <Router history={history}>
                <Layout>
                    <Switch>
                        <Route path='/login' component={user.Login} />
                        <Route path='/sign-up' component={user.SignUp} />
                        <PrivateRoute isAuthenticated={isAuthenticated} path='/vacancies/add' component={vacancy.AddVacancy} />
                        <PrivateRoute isAuthenticated={isAuthenticated} path='/my-profile' component={user.UserProfile} />
                        <PrivateRoute isAuthenticated={isAuthenticated} path='/vacancies/edit/:id' component={vacancy.EditVacancy} />
                        <Route extact path='/vacancies/:id' component={vacancy.VacancyDetails} />
                        <Route extact path='/vacancies' component={vacancy.Vacancies} />
                     
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