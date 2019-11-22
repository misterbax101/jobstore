import React from 'react';
import { Spinner as BootsrapSpinner } from 'reactstrap';
import './Spinner.css';

interface SpinnerProps {
        loading: boolean
}

const Spinner: React.FC<SpinnerProps> = ({loading}) => {
        if(!loading) {
                return null;
        }
        return (<div className="spinner">
                <BootsrapSpinner></BootsrapSpinner>
        </div>);
}
export default Spinner;
