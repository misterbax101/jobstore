import React from 'react';
import { Row, Col, Spinner } from 'reactstrap';
import { RouteComponentProps } from 'react-router-dom';

import { VacancyModel } from '../../types';


interface VacancyDetailsProps extends RouteComponentProps<any> {
    getVacancy: (id: number) => any,
    vacancy: VacancyModel
}

class VacancyDetails extends React.Component<VacancyDetailsProps, {}>{

    componentDidMount() {
        const { vacancy, getVacancy, match } = this.props;
        if (!vacancy) {
            const { id } = match.params;
            getVacancy(id);
        }
    }

    render() {
        if (!this.props.vacancy) {
            return <Row className="text-center mt-5"><Col><Spinner></Spinner></Col></Row>;
        }
        return (
            <React.Fragment>
                {this.props.vacancy.title}
            </React.Fragment>
        );
    }
}

export default VacancyDetails;

