import React from 'react';

import accounts from '../../apis/accounts';
class Home extends React.Component<{}, {}> {

    render() {
          accounts.get(`/241fc6f8-9daf-4753-b703-601b1b923752`)
            .then(respone => console.log(respone));
        return <div>Home</div>;
    }
}

export default Home;