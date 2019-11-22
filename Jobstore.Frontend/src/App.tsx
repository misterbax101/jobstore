import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';

import {
    Home,
    Login,
    SignUp,
    vacancy
} from './screens';
import { Layout } from './containers/layout';
import { history } from './untils/history';
import { authCheckState } from './store/auth';


interface AppProps {
    onTryAutoSignup: () => Promise<void>
}

class App extends React.Component<AppProps> {
    componentDidMount() {
        this.props.onTryAutoSignup();
    }

    render() {
        return (
            <Router history={history}>
                <Layout>
                    <Switch>
                        <Route path='/login' component={Login} />
                        <Route path='/sign-up' component={SignUp} />
                        <Route extact path='/vacancies/add' component={vacancy.AddVacancy} />
                        <Route extact path='/vacancies/edit/:id' component={vacancy.EditVacancy} />
                        <Route extact path='/vacancies/:id' component={vacancy.VacancyDetails} />
                        <Route extact path='/vacancies' component={vacancy.VacanciesList} />
                        <Route path='/' exact component={Home} />
                    </Switch>
                </Layout>
            </Router>
        );
    }
}

export default connect(null, { onTryAutoSignup: authCheckState })(App);