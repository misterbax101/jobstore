import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';

import {
    Home,
    Login,
    SignUp,
    AddNewVacancy,
    VacancyDetails,
    VacanciesList
} from './screens';
import { Layout } from './containers/layout';
import { history } from './untils/history';
import { authCheckState } from './store/auth';

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

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
                        <Route extact path='/vacancies/add' component={AddNewVacancy} />
                        <Route extact path='/vacancies/:id' component={VacancyDetails} />
                        <Route path='/vacancies' component={VacanciesList} />
                        <Route path='/' exact component={Home} />
                    </Switch>
                </Layout>
            </Router>
        );
    }
}

export default connect(null, { onTryAutoSignup: authCheckState })(App);