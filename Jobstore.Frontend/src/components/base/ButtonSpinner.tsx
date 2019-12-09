import React from 'react';
import { Spinner } from 'reactstrap';

interface ButtonSpinnerProps {
    loading: boolean
}

const ButtonSpinner: React.FC<ButtonSpinnerProps> = ({ loading }) => {
    return loading ? <Spinner type="grow" color="secondary" className="align-middle" /> : null;
}
export default ButtonSpinner;
