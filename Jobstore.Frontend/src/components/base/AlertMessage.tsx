import React from 'react';
import { Alert as AlertComponent } from 'reactstrap';

import { Alert, AlertTypes } from '../../types';


const mapColorToType = {
    [AlertTypes.Success]: 'success',
    [AlertTypes.Error]: 'danger',
    [AlertTypes.Info]: 'info',
}
const AlertMessage: React.FC<Alert> = ({ message, type }) => {
    return <AlertComponent color={mapColorToType[type]}>{message}</AlertComponent>;
}

export default AlertMessage;