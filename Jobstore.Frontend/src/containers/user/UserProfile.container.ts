import { connect } from 'react-redux';

import UseProfile from '../../components/user/useProfile/UseProfile';
import { AppState } from '../../store';
import { selectCurrentUser, selectCurrentId  } from '../../store/auth';
import {  getUserById } from  '../../store/users';

const mapStateToProps = (state: AppState) => ({
    userId: selectCurrentId(state),
    userData: selectCurrentUser(state)
});

export default connect(
    mapStateToProps,
    { 
        getUserById,
     },
)(UseProfile)