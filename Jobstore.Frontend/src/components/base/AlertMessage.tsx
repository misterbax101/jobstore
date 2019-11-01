import React from 'react';
import { Alert as  AlertComponent } from 'reactstrap';

import Alert, { AlertTypes } from '../../models/Alert';

type Props = {
    data: Alert
}

const mapColorToType = {
    [AlertTypes.Success]: 'success',
    [AlertTypes.Error]: 'danger',
    [AlertTypes.Info]: 'info',
}
const AlertMessage: React.FC<Props> = (props) => {
    return <AlertComponent color={mapColorToType[props.data.type]}>{props.data.message}</AlertComponent>;
}

export default AlertMessage;