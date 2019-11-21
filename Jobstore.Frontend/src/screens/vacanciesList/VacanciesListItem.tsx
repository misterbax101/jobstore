import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink } from 'reactstrap';

import { VacancyModel } from '../../types';
import { truncateWithEllipses } from '../../untils/helper';

interface VacanciesListItemProps {
    vacancy: VacancyModel
}

const MAX_DESCRIPTION_LENGHT = 200;

const VacanciesListItem: React.FC<VacanciesListItemProps> = ({ vacancy: { id, title, description, companyName, salaryValue, salaryCurrency } }) => {

    const shortenDescription = truncateWithEllipses(description,MAX_DESCRIPTION_LENGHT);
    return (
        <Card>
            <CardBody>
                <CardTitle tag="h5" className="text-primary">{title}</CardTitle>
                <CardSubtitle>{shortenDescription}</CardSubtitle>

                <CardLink
                    tag={Link}
                    to={`/vacancies/${id}`}>
                    Go to get more details
                 </CardLink>
            </CardBody>
        </Card>
    );
}

export default VacanciesListItem;