import React from 'react';

import { UserModel , UpdateProfileModel } from '../../../types';
import UserProfileFrom from './UserProfileFrom';
import { Spinner } from 'reactstrap';

interface UseProfileProps {
    userData?: UserModel,
    userId: string,
    getUserById: (userId:string) => void
    updateUserProfile: (user: UserModel) => Promise<void>
}

class UseProfile extends React.Component<UseProfileProps> {
    componentDidMount() {
        const { userId, getUserById } = this.props;
        if (userId) {
            getUserById(userId);
        }
    }

    onFormSubmit =  (values: UserModel) => {
        this.props.updateUserProfile(values);
    }

    render() {
        const { userData } = this.props;
        if (!userData) {
            return <Spinner />;
        }
        return (
            <UserProfileFrom
                onSubmit={this.onFormSubmit}
                initialValues={userData} />
        );
    }
}

export default UseProfile;