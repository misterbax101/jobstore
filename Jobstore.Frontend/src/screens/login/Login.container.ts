import { connect } from 'react-redux';

import Login from './Login';
import { AppState } from '../../store';
import { login } from '../../store/auth/actions';

const mapStateToProps = (state: AppState) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.auth.error,
    loading: state.auth.loading
});

export default connect(
    mapStateToProps,
    { onLogin: login },
)(Login)