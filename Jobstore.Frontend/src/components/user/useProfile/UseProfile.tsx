import React from 'react';

import { UserModel , UpdateProfileModel } from '../../../types';
import UserProfileFrom from './UserProfileFrom';
import { Spinner } from 'reactstrap';

interface UseProfileProps {
    userData?: UserModel,
    userId: string,
    getUserById: (userId:string) => void
    updateUserProfile: (userId:string, data:UpdateProfileModel) => void
}

class UseProfile extends React.Component<UseProfileProps> {
    componentDidMount(){
        const { userId, getUserById} = this.props;
        if(userId) {
        getUserById(userId);
        }
    }

    onFormSubmit =  (values: UserModel) => {
        const { userId, updateUserProfile} = this.props;
        updateUserProfile(userId, {...values});
    }

    render() {
        const { userData } = this.props;
        if(!userData){
            return <Spinner />;
        }
        return (
            <UserProfileFrom  
                onSubmit={this.onFormSubmit}
                initialValues={userData}/>
        );
    }
}


export default UseProfile;