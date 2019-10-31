import React from 'react';
import { Alert } from 'reactstrap';

import { AlertType } from '../../store/alert/types';

type Props = {
    message: string | null
    alerType: AlertType 
}

const mapColorToType = {
    [AlertType.Success]: 'success',
    [AlertType.Error]: 'danger',
    [AlertType.Info]: 'info',
}
const AlertMessage: React.FC<Props> = (props) => {
    return <Alert color={mapColorToType[props.alerType]}>{props.message}</Alert>;
}

export default AlertMessage;