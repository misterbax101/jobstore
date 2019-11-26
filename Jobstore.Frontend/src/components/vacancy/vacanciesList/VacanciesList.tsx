import React from 'react';
import { Col } from 'reactstrap';

import { VacancyModel } from '../../../types';
import VacanciesListItem from './VacanciesListItem';

interface VacanciesListProps {
    vacancies: Array<VacancyModel>
}

const VacanciesList: React.FC<VacanciesListProps> = ({ vacancies }) => {
    return (
        <Col>
            {vacancies.map(vacancy =>
                <VacanciesListItem
                    key={vacancy.id}
                    className="mb-1"
                    vacancy={vacancy} />)}
        </Col>);
}

export default VacanciesList;
