import React from 'react';

import { UserModel } from '../../../types';
import UserProfileFrom from './UserProfileFrom';
import { Spinner } from 'reactstrap';

interface UseProfileProps {
    userData?: UserModel,
    userId?: string,
    getUserById: (id:string) => void
}

class UseProfile extends React.Component<UseProfileProps> {
    componentDidMount(){
        const { userId, getUserById} = this.props;
        if(userId) {
        getUserById(userId);
        }
    }

    onFormSubmit (values: UserModel){
        console.log(values);
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