import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

import { VacancyModel } from '../../../types';
import { truncateWithEllipses } from '../../../untils/helper';

interface VacanciesListItemProps {
    vacancy: VacancyModel;
    className?: string;
    renderActions?: (vacancy: VacancyModel) => JSX.Element;
}

const MAX_DESCRIPTION_LENGHT = 200;

const VacanciesListItem: React.FC<VacanciesListItemProps> = ({ vacancy, className, renderActions }) => {

    const { title, description, companyName, salaryValue, salaryCurrency } = vacancy;
    const shortenDescription = truncateWithEllipses(description, MAX_DESCRIPTION_LENGHT);
    return (
        <Card
        className="mb-1">
            <CardBody>
                <CardTitle tag="h5" className="text-primary">{title}</CardTitle>
                <CardSubtitle>{shortenDescription}</CardSubtitle>
                <CardText>
                    <span>Proposed salary: </span>
                    <span>{salaryValue} {salaryCurrency}</span>
                    <p>
                        <span>Company name: </span>
                        <span>{companyName}</span>
                    </p>
                </CardText>
                {renderActions && renderActions(vacancy)}
            </CardBody>
        </Card>
    );
}

export default VacanciesListItem;