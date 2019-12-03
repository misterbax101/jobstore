import { connect } from 'react-redux';

import SignUp from '../../components/user/signUp/SignUp';
import { AppState } from '../../store';
import {
    signUp
} from '../../store/users';

const mapStateToProps = (state: AppState) => ({
    requestStatus: state.users.signUp
});

export default connect(
    mapStateToProps,
    { onSubmit: signUp },
)(SignUp)