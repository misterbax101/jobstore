import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

import { Header, Footer } from './../../components/layout';
import { AppState } from './../../store';
import { logout, selectCurrentUser } from './../../store/auth';

const mapStateToProps = (state: AppState) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: selectCurrentUser(state)
});

const mapDispatchToProps = {
    logout
}

type LayoutProps = ReturnType<typeof mapStateToProps> | typeof mapDispatchToProps;

const Layout: React.FC<any> = (props) => {
    return (
        <React.Fragment>
            <Header {...props} />
            <Container>
                <Row>
                    <Col md={{ size: 8, offset: 2 }}>
                        {props.children}
                    </Col>
                </Row>
            </Container>
            <Footer />
        </React.Fragment>
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(Layout);