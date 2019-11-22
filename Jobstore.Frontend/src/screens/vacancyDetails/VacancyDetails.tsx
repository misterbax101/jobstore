import React from 'react';
import { Row, Col, Spinner, CardBody, Card, CardTitle, CardSubtitle, CardText, CardLink, } from 'reactstrap';
import { RouteComponentProps, Link } from 'react-router-dom';

import { VacancyModel, VacancyType } from '../../types';


interface VacancyDetailsProps extends RouteComponentProps<any> {
    getVacancy: (id: number) => any,
    vacancy: VacancyModel
    vacancyTypes: Array<VacancyType>
    getVacancyTypes: () => void
}

class VacancyDetails extends React.Component<VacancyDetailsProps, {}>{

    componentDidMount() {
        const { vacancy, getVacancy, match, getVacancyTypes } = this.props;

        getVacancyTypes();
        if (!vacancy) {
            const { id } = match.params;
            getVacancy(id);
        }
    }

    render() {
        if (!this.props.vacancy || this.props.vacancyTypes.length === 0) {
            return <Row className="text-center mt-5"><Col><Spinner></Spinner></Col></Row>;
        }
        const { title, description, salaryValue, salaryCurrency, companyName, ownerName, typeId } = this.props.vacancy;
        const type = this.props.vacancyTypes[typeId];
        return (
            <Row>
                <Card
                   className="w-100">
                    <CardBody>
                        <CardTitle tag="h5" className="text-primary">{title}</CardTitle>
                        <CardSubtitle>{description}</CardSubtitle>
                        <CardText>
                            Type: {type.title}
                        </CardText>
                        <CardText>
                            Company name: {companyName} Type: {type.title}
                        </CardText>
                        <CardText>
                            Proposed salary: {salaryValue} {salaryCurrency}
                        </CardText>
                        <CardText>
                            Creacted by: {ownerName}
                        </CardText>
                    </CardBody>
                </Card>
            </Row>
        );
    }
}

export default VacancyDetails;

