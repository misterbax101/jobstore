import React from 'react';
import { Link  } from 'react-router-dom';

class LoginButton extends React.Component<{},{}>{
    render(){
        return <Link to='/login'>Login</Link>
    }
}

export default LoginButton;