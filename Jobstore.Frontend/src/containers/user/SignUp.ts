import { connect } from 'react-redux';

import SignUp from '../../components/user/signUp/SignUp';
import { AppState } from '../../store';
import {
    signUp,
    getSignUpStatus
} from '../../store/users';

const mapStateToProps = (state: AppState) => ({
    requestStatus: getSignUpStatus(state)
});

export default connect(
    mapStateToProps,
    { onSubmit: signUp },
)(SignUp)