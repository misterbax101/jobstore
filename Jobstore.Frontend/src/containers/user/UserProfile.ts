import { connect } from 'react-redux';

import UseProfile from '../../components/user/useProfile/UseProfile';
import { AppState } from '../../store';
import { getCurrentUser, selectCurrentId  } from '../../store/auth';
import { getUserById, updateUserProfile, getUpdateProfileStatus } from  '../../store/users';

const mapStateToProps = (state: AppState) => ({
    userId: selectCurrentId(state) || '',
    userData: getCurrentUser(state),
    requestStatus: getUpdateProfileStatus(state)
});

export default connect(
    mapStateToProps,
    { 
        getUserById,
        updateUserProfile
     },
)(UseProfile)