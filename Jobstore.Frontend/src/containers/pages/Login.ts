import { connect } from 'react-redux';

import { Login } from './../../components/pages';
import { AppState } from './../../store';
import { login } from './../../store/auth/actions';

const mapStateToProps = (state: AppState) => ({
    isAuthenticated: state.auth.isAuthenticated,
    alertMessage: state.alert
});

export default connect(
    mapStateToProps,
    { onLogin: login },
)(Login)