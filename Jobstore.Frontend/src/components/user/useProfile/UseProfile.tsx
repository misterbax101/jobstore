import React from 'react';
import { Spinner, Col } from 'reactstrap';

import UserProfileFrom from './UserProfileFrom';
import FormAlerts from './../../base/FormAlerts';
import { UserModel, RequestStatus } from '../../../types';

interface UseProfileProps {
    userData?: UserModel,
    userId: string,
    requestStatus: RequestStatus,
    getUserById: (userId: string) => void
    updateUserProfile: (user: UserModel) => Promise<void>
}

class UseProfile extends React.Component<UseProfileProps> {
    componentDidMount() {
        const { userId, getUserById } = this.props;
        if (userId) {
            getUserById(userId);
        }
    }

    onFormSubmit = (values: UserModel) => {
        this.props.updateUserProfile(values);
    }

    render() {
        const { userData, requestStatus } = this.props;
        if (!userData) {
            return <Spinner />;
        }
        return (
            <Col>
               <h2>Manage profile</h2>
                <FormAlerts {...requestStatus} />
                <UserProfileFrom 
                    onSubmit={this.onFormSubmit}
                    initialValues={userData} />
            </Col>
        );
    }
}

export default UseProfile;