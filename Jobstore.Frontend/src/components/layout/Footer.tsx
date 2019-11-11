import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


const footerStyles: React.CSSProperties = {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    minHeight: '60px',
}

class Footer extends Component {
    render() {
        const currentYear = new Date().getFullYear();
        return (
            <footer
                className="bg-light text-muted"
                style={footerStyles}>
                <Container className='py-3'>
                    <Row >
                        <Col>
                            © {currentYear} Jobstore  All Rights Reserved
                            <span className='float-right'>
                              Contact us 
                              <a href='mailto:' className='ml-1'>info@jobstore.com</a>
                            </span>
                        </Col>
                    </Row>
                    <hr></hr>
                </Container>
            </footer>
        )
    }
}

export default Footer;
