import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';

import { Home } from './components/pages';
import { Layout } from './containers/layout';
import { Login, SignUp } from './containers/pages';
import { AddNewVacancy, VacancyDetails } from './containers/pages/vacancies';
import { history } from './untils/history';
import { authCheckState } from './store/auth';

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

interface AppProps {
    onTryAutoSignup: () => Promise<void>
}

class App extends React.Component<AppProps> {
    constructor(props: AppProps) {
        super(props);
        this.props.onTryAutoSignup();
    }
    // componentDidMount(){
    //     this.props.onTryAutoSignup();
    // }

    render() {
        return (
            <Router history={history}>
                <Layout>
                    <Switch>
                        <Route path='/login' component={Login} />
                        <Route path='/sign-up' component={SignUp} />
                        <Route path='/vacancies/add' component={AddNewVacancy} />
                        <Route extact path='/vacancies/:id' component={VacancyDetails} />
                        <Route path='/' exact component={Home} />
                    </Switch>
                </Layout>
            </Router>
        );
    }
}

export default connect(null, { onTryAutoSignup: authCheckState })(App);