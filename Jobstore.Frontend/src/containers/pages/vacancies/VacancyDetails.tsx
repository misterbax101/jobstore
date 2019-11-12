import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Spinner } from 'reactstrap';
import { RouteComponentProps } from 'react-router-dom';

import { getVacancy } from '../../../store/vacancies/actions';
import VacancyModel from '../../../models/VacancyModel';
import { AppState } from '../../../store';



interface VacancyDetailsProps extends RouteComponentProps<any> {
    getVacancy: (id: number) => any,
    vacancy: VacancyModel
}


class VacancyDetails extends React.Component<VacancyDetailsProps, {}>{
    componentWillMount() {
        const { id } = this.props.match.params;
        this.props.getVacancy(id);
    }

    render() {
        if (!this.props.vacancy) {
            return <Row className="text-center mt-5"><Col><Spinner></Spinner></Col></Row>;
        }
        return (
            <React.Fragment>

            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: AppState, ownProps: any) => {
    const { id } = ownProps.match.params;
    return {
        vacancy: state.vacancies.vacancies[id]
    }
}

export default connect(mapStateToProps, {
    getVacancy,
})(VacancyDetails);