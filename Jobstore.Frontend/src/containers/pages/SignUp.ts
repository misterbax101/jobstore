import { connect } from 'react-redux';

import { SignUp } from '../../components/pages';
import { AppState } from '../../store';
import { signUp } from '../../store/users/actions';

const mapStateToProps = (state: AppState) => ({
    alert: null
});

export default connect(
    mapStateToProps,
    { onSubmit: signUp },
)(SignUp)