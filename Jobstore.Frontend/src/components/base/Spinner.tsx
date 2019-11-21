import React from 'react';
import { Row, Col, Spinner as BootsrapSpinner } from 'reactstrap';


const Spinner: React.FC = () =>
    (<Row className="text-center mt-5">
        <Col>
            <BootsrapSpinner></BootsrapSpinner>
        </Col>
    </Row>);

    export default Spinner;
