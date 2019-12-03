import React from 'react';
import { Alert } from 'reactstrap';

interface FormAlertsProps {
    error: string | null,
    success: string | null
}

const FormAlerts: React.FC<FormAlertsProps> = ({ error, success }) => {
    return (<>
        {success && <Alert color="success">{success}</Alert>}
        {error && <Alert color='danger'>{error}</Alert>}
    </>);
}

export default FormAlerts;