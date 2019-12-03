import { connect } from 'react-redux';
import {  Dispatch } from 'redux';

import Login from '../../components/user/login/Login';
import { AppState, ActionCreator } from '../../store';
import { login, reset } from '../../store/auth';
import { LoginModel } from '../../types';

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