import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';

import { Header, Footer } from './../../components/layout';
import { AppState } from './../../store';
import { logout, selectUserName, isAuthenticated } from './../../store/auth';
import './Layout.css'

const mapStateToProps = (state: AppState) => ({
    isAuthenticated: isAuthenticated(state),
    userName: selectUserName(state)
});

const mapDispatchToProps = {
    logout
}

type LayoutProps = ReturnType<typeof mapStateToProps> | typeof mapDispatchToProps;

const Layout: React.FC<any> = (props) => {
    return (
        <React.Fragment>
            <Header {...props} />
            <Container
                tag={"main"}
                className="pt-2 pb-2 pr-4 pl-4">
                {props.children}
            </Container>
            <Footer />
        </React.Fragment>
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(Layout);