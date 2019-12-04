import { connect } from 'react-redux';

import Login from '../../components/user/login/Login';
import { AppState } from '../../store';
import { login, reset } from '../../store/auth';

const mapStateToProps = (state: AppState) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.auth.error,
    loading: state.auth.loading
});

const mapDispatchToProps = {
    onLogin: login,
    resetForm: reset
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)