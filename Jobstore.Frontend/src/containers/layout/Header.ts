import { connect } from 'react-redux';

import { Header } from './../../components/layout';
import { AppState } from './../../store';
import { logout } from './../../store/auth/actions';
import { getCurrencies, getVacancyTypes } from './../../store/data/actions';

const mapStateToProps = (state: AppState) => ({
    isAuthenticated: state.auth.isAuthenticated,
    userName: state.auth.currentUser ? state.auth.currentUser.firstName : null
});

const mapDispatchToProps = {
    logout,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);